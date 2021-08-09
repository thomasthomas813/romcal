import { CalendarScope } from '@romcal/constants/calendar-scope';
import { LiturgicalPeriods } from '@romcal/constants/periods';
import { Precedences, PRECEDENCES } from '@romcal/constants/precedences';
import { Ranks } from '@romcal/constants/ranks';
import { PROPER_OF_TIME_NAME } from '@romcal/general-calendar/proper-of-time';
import { RomcalConfig } from '@romcal/models/config';
import LiturgicalDay from '@romcal/models/liturgical-day';
import LiturgicalDayDef from '@romcal/models/liturgical-day-def';
import {
  BaseCalendar,
  DatesIndex,
  LiturgicalBuiltData,
  LiturgicalCalendar,
} from '@romcal/types/calendar';
import { DateDef, DateDefExtended, DayOfWeek } from '@romcal/types/liturgical-day';
import { Dates } from '@romcal/utils/dates';
import dayjs, { Dayjs } from 'dayjs';

export class Calendar implements BaseCalendar {
  readonly #config: RomcalConfig;
  readonly #year: number;
  readonly dates: Dates;

  constructor(config: RomcalConfig, year: number) {
    this.#config = config;
    this.#year = year;
    this.dates = new Dates(config, year);
  }

  /**
   * Lookup the date of a LiturgicalDayDef object, from a defined year scope
   * @param dateDef
   * @param yearOffset
   */
  #dateLookup(dateDef: DateDef | DateDefExtended, yearOffset = 0): Dayjs | null {
    let date: Dayjs | null = null;
    const year = this.#year + (dateDef.yearOffset ?? 0) + yearOffset;

    // DateDefMonthDate
    if (
      Number.isInteger(dateDef.month) &&
      Number.isInteger(dateDef.date) &&
      dateDef.month! > 0 &&
      dateDef.date! > 0
    ) {
      date = dayjs(`${year}-${dateDef.month}-${dateDef.date}`);
    }

    // DateDefDateFnAddDay or DateDefDateFnSubtractDay
    else if (
      typeof dateDef.dateFn === 'string' &&
      Object.prototype.hasOwnProperty.call(this.dates, dateDef.dateFn)
    ) {
      const args = [...(dateDef.dateArg ?? []), year];
      // todo: set correctly TS typing
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const dates = this.dates[dateDef.dateFn](...args);
      date = (Array.isArray(dates) ? dates.find((e) => e) : dates) || null;

      if (date && Number.isInteger(dateDef.addDay)) date = date.add(dateDef.addDay!, 'days');
      if (date && Number.isInteger(dateDef.subtractDay))
        date = date.subtract(dateDef.subtractDay!, 'days');
    }

    // DateDefMonthDowNthWeekInMonth
    else if (
      Number.isInteger(dateDef.month) &&
      Number.isInteger(dateDef.dayOfWeek) &&
      Number.isInteger(dateDef.nthWeekInMonth)
    ) {
      const firstDayOf7Days = dayjs(`${year}-${dateDef.month}-${7 * dateDef.nthWeekInMonth! - 6}`);

      date = Calendar.#getNextDayOfWeek(firstDayOf7Days, dateDef.dayOfWeek!);
    }

    // DateDefMonthLastDowInMonth
    else if (Number.isInteger(dateDef.month) && Number.isInteger(dateDef.lastDayOfWeekInMonth)) {
      const firstDayOfMonth = dayjs(`${year}-${dateDef.month}-01`);
      const firstDayOfLast7DaysOfMonth = dayjs(
        `${year}-${dateDef.month}-${firstDayOfMonth.daysInMonth()}`,
      ).subtract(6, 'days');

      date = Calendar.#getNextDayOfWeek(firstDayOfLast7DaysOfMonth, dateDef.lastDayOfWeekInMonth!);
    }

    return date;
  }

  /**
   * Lookup the date of a LiturgicalDayDef object (from a defined year scope)
   * and manage defined date exceptions
   * @param def
   * @param yearOffset
   * @private
   */
  #buildDate(def: LiturgicalDayDef, yearOffset = 0): Dayjs | null {
    let date = this.#dateLookup(def.dateDef, yearOffset);

    const setDate = (dateDefExtended: DateDefExtended) => {
      if (Number.isInteger(dateDefExtended.addDay)) {
        date = date!.add(dateDefExtended.addDay!, 'days');
      } else if (Number.isInteger(dateDefExtended.subtractDay)) {
        date = date!.subtract(dateDefExtended.subtractDay!, 'days');
      } else {
        date = this.#dateLookup(dateDefExtended, yearOffset);
      }
    };

    if (date) {
      def.dateExceptions.forEach((exception) => {
        // ifIsBetween
        if (typeof exception.ifIsBetween === 'object') {
          const from = this.#dateLookup(exception.ifIsBetween.from, yearOffset);
          const to = this.#dateLookup(exception.ifIsBetween.to, yearOffset);
          if (from && to) {
            // From-To inclusive
            if (exception.ifIsBetween.inclusive) {
              if (date!.isSameOrAfter(from) && date!.isSameOrBefore(to)) {
                setDate(exception.setDate);
              }
            }
            // From-To exclusive
            else {
              if (date!.isAfter(from) && date!.isBefore(to)) {
                setDate(exception.setDate);
              }
            }
          }
        }

        // ifIsSameAsDate
        else if (typeof exception.ifIsSameAsDate === 'object') {
          const dateComparison = this.#dateLookup(exception.ifIsSameAsDate, yearOffset);
          if (dateComparison && dateComparison.isSame(date!)) {
            setDate(exception.setDate);
          }
        }

        // ifIsDayOfWeek
        else if (Number.isInteger(exception.ifIsDayOfWeek)) {
          if (date!.day() === exception.ifIsDayOfWeek) {
            setDate(exception.setDate);
          }
        }
      });
    }

    return date;
  }

  /**
   * Get the next day of week from the provided date until the next 6 days
   * @param date
   * @param dayOfWeek
   * @private
   */
  static #getNextDayOfWeek(date: Dayjs, dayOfWeek: DayOfWeek): Dayjs {
    return date.add((7 + dayOfWeek - date.day()) % 7, 'days');
  }

  /**
   * Build the LiturgicalDay data collection, with their dates
   * @private
   */
  #buildDatesData(): LiturgicalBuiltData {
    const builtData: LiturgicalBuiltData = {
      byKeys: {},
      datesIndex: {},
    };

    Object.values(this.#config.liturgicalDayDef).forEach((def) => {
      // In a Liturgical Calendar scope:
      // - Because a Liturgical Year is straddling 2 Gregorian year,
      //   we need to compute the date on the 2 Gregorian years,
      //   and then determine the one to keep between both.
      // - Note: dates from the Proper of Time are already generated within a liturgical year,
      //   so in this case we don't have to check the previously gregorian year.
      const previousYearDate =
        def.fromCalendar !== PROPER_OF_TIME_NAME && this.#config.scope === CalendarScope.Liturgical
          ? this.#buildDate(def, -1)
          : null;

      const currentYearDate = this.#buildDate(def);

      [previousYearDate, currentYearDate]
        // Remove all dates that are null. This can occur when a liturgical day isn't celebrated
        // because of any general/particular calendar settings.
        // E.g. The 6th Thursday within the Easter Time can be not celebrated
        // because in some calendars, the Solemnity of the Ascension is taking precedence.
        .filter((d) => d && dayjs.isDayjs(d) && d.isValid())
        .forEach((date) => {
          // Typing: the nullable dates have been removed in the filter above,
          // so we redefine the date object as a non-nullable Dayjs object
          date = date as Dayjs;

          const dateStr = date.format('YYYY-MM-DD');
          // const dateStr = date.toISOString().substr(0, 10);

          // All the dates of the whole year (gregorian or liturgical) are already generated
          // from the Proper of Time.
          // Then, all dates from the general/particular calendar(s) that don't match
          // an existing date from the Proper of Time must be ignored,
          // because they falls outside the year scope defined by the Proper of Time.
          if (def.fromCalendar !== PROPER_OF_TIME_NAME && !builtData.datesIndex[dateStr]) {
            return;
          }

          // Take the first LiturgicalDay object of a specified day.
          // The first object is always a LiturgicalDay from the Proper of Time,
          // since a LiturgicalDay is generated for each day of the Liturgical Year.
          // In the case the LiturgicalDayDef is coming from the Proper of Time,
          // the baseData must be null.
          const baseData: LiturgicalDay | null =
            def.fromCalendar === PROPER_OF_TIME_NAME
              ? null
              : builtData.byKeys[builtData.datesIndex[dateStr][0]];

          /**
           * For Memorial and Feast celebrations only, the weekday property is added
           * containing the LiturgicalDay object of the base weekday.
           *
           * - Memorials: their observance is integrated into the celebration of the occurring weekday
           *   in accordance with the norms set forth in the General Instruction of the Roman
           *   Missal and of the Liturgy of the Hours. (UNLY #14)
           * - Liturgy of the hours: // todo: cite precise sources from the General Instructions of the Liturgy of the hours
           *    - Memorials: the liturgy of the hour remain the one of the weekday.
           *    - Feasts: small hours are taken from the weekday.
           */
          const weekday: LiturgicalDay | null =
            baseData &&
            builtData.byKeys[def.key] &&
            [Ranks.FEAST, Ranks.MEMORIAL].includes(builtData.byKeys[def.key].rank) &&
            // below, this test prevents adding the weekday property on a base Proper of Time object,
            // especially on all the weekdays during the Easter octave (since all theses days are Solemnities).
            baseData.key !== def.key
              ? baseData
              : null;

          // Create a new LiturgicalDay object, and add it to the builtData object.
          builtData.byKeys[def.key] = new LiturgicalDay(
            def,
            baseData,
            dateStr,
            {
              ...this.#config.toObject(),
              year: this.#year,
            },
            weekday,
          );

          // Also add the corresponding date-key object.
          builtData.datesIndex[dateStr] = [...(builtData.datesIndex[dateStr] ?? []), def.key];
        });
    });

    // Order data by date
    builtData.datesIndex = Object.keys(builtData.datesIndex)
      .sort()
      .reduce((obj: DatesIndex, key) => {
        obj[key] = builtData.datesIndex[key];
        return obj;
      }, {});

    return builtData;
  }

  /**
   * Generate a liturgical calendar according to the precedence rules between liturgical days.
   */
  generateCalendar(): LiturgicalCalendar {
    const finalData: LiturgicalCalendar = {};

    const builtData = this.#buildDatesData();

    Object.keys(builtData.datesIndex).forEach((dateStr) => {
      // Order the LiturgicalDays objects, following the precedence rules defined in the UNLY #49.
      const dates: LiturgicalDay[] = builtData.datesIndex[dateStr]
        .map((key) => builtData.byKeys[key])
        .sort(({ precedence: firstPrecedence }, { precedence: nextPrecedence }) => {
          const type1 = PRECEDENCES.indexOf(firstPrecedence);
          const type2 = PRECEDENCES.indexOf(nextPrecedence);
          if (type1 < type2) return -1;
          if (type1 > type2) return 1;
          return 0;
        });

      // Exception the Thursday within the Holy Week, this day contain 2 liturgical days, i.e.:
      //
      // - The weekday of Holy Thursday and the season of Lent is finishing just before the
      //   mass of the Lord’s Supper memorial.
      //   UNLY #28. The forty days of Lent run from Ash Wednesday up to but excluding the Mass of
      //   the Lord’s Supper exclusive.
      //
      // - The Paschal Triduum starts from the mass of the Lord’s Supper memorial.
      //   UNLY #19. The Paschal Triduum of the Passion and Resurrection of the Lord begins with the
      //   evening Mass of the Lord’s Supper, has its centre in the Easter Vigil, and closes with
      //   Vespers (Evening Prayer) of the Sunday of the Resurrection.
      //
      // These 2 liturgical day entities needs to be separated, because they do not have the same
      // metadata: different liturgical colors, seasons, rank, precedence...
      // The mass (Chrismal Mass on Holy Thursday, and the Mass the Lord’s Supper the evening), as
      // well as the liturgy of the hours are also different.
      let thursdayOfTheLordsSupper: LiturgicalDay | null = null;
      if (dates[0].key === 'thursday_of_the_lord_s_supper') {
        thursdayOfTheLordsSupper = dates[0];
        dates.shift();
      }

      // - The first item in the array correspond to the Liturgical Day that take precedence.
      // - When multiple LiturgicalDay objects are output the same day, it means that all other
      //   object after the first LiturgicalDay object in the array are optionals.
      //
      // UNLY #14:
      // Memorials are either obligatory or optional; their observance is integrated into the celebration
      // of the occurring weekday in accordance with the norms set forth in the General Instruction of the Roman
      // Missal and of the Liturgy of the Hours.
      // Obligatory Memorials which fall on weekdays of Lent may only be celebrated as Optional
      // Memorials.
      // If several Optional Memorials are inscribed in the Calendar on the same day, only one may be
      // celebrated, the others being omitted.
      const defaultLiturgicalDay = dates[0];

      // If the current day is:
      //
      // - a privileged weekday (UNLY #59 9):
      //     - a weekdays of Advent from December 17 up to and including December 24;
      //     - a days within the Octave of Christmas;
      //     - a weekdays of Lent (except Ash Wednesday and all weekdays of the Holy Week, UNLY #16 a).
      //
      // - a weekday (UNLY #59 13).
      //
      // [1] Output Optional Memorials, which, however, may be celebrated, in the special manner
      //     described in the General Instruction of the Roman Missal (see below, GIRM #355)
      //     and of the Liturgy of the Hours, even on the days listed in UNLY #59 9.
      //
      // [2] If the current day is a privileged weekday (UNLY #59 9),
      //       todo: set a "massIsCelebrated: false" flag on available memorial LiturgicalDay objects.
      //     According to the GIRM #355 (see below), the mass of the optional memorials are not celebrated.
      //     However the memorial can be commemorate, and the Collect may be taken.
      //
      // On Optional Memorials: (GIRM #355)
      // a. On the weekdays of Advent from 17 December to 24 December, on days within
      //    the Octave of the Nativity of the Lord, and on the weekdays of Lent, except Ash
      //    Wednesday and during Holy Week, the Mass texts for the current liturgical day
      //    are used; but the Collect may be taken from a Memorial which happens to be
      //    inscribed in the General Calendar for that day, except on Ash Wednesday and
      //    during Holy Week. On weekdays of Easter Time, Memorials of Saints may rightly
      //    be celebrated in full.
      // b. On weekdays of Advent before 17 December, on weekdays of Christmas Time
      //    from 2 January, and on weekdays of Easter Time, one of the following may be
      //    chosen: either the Mass of the weekday, or the Mass of the Saint or of one of the
      //    Saints whose Memorial is observed, or the Mass of any Saint inscribed in the
      //    Martyrology for that day.
      // c. On weekdays in Ordinary Time, there may be chosen either the Mass of the
      //    weekday, or the Mass of an Optional Memorial which happens to occur on that
      //    day, or the Mass of any Saint inscribed in the Martyrology for that day, or a Mass
      //    for Various Needs, or a Votive Mass.
      let optionalMemorials: LiturgicalDay[] = [];
      if (
        (defaultLiturgicalDay.precedence === Precedences.PrivilegedWeekday_9 ||
          defaultLiturgicalDay.precedence === Precedences.Weekday_13) &&
        !defaultLiturgicalDay.periods.includes(LiturgicalPeriods.HOLY_WEEK)
      ) {
        optionalMemorials = dates
          .slice(1)
          .filter((d) => d.precedence === Precedences.OptionalMemorial_12)
          .map((d) => (d.isOptional = true) && d);
      }

      finalData[dateStr] = [
        defaultLiturgicalDay,
        ...optionalMemorials,
        ...(thursdayOfTheLordsSupper ? [thursdayOfTheLordsSupper] : []),
      ];
    });

    return finalData;
  }
}