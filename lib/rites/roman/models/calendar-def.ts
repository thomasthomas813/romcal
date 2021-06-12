import { RomcalConfig } from './config';
import { LiturgicalDefBuiltData } from '../general-calendar/temporale';
import LiturgicalDay from './liturgical-day';
import dayjs, { Dayjs } from 'dayjs';
import { LiturgicalColors } from '../constants/colors';
import { RomcalCalendarScope } from '../../../constants/scope';
import { Precedences, PRECEDENCES } from '../constants/precedences';
import { Ranks } from '../constants/ranks';

/**
 * Date definition, used in the [CalendarDef] class
 */
export type DateDefInput = Pick<LiturgicalDay, 'key'> &
  Partial<Pick<LiturgicalDay, 'precedence' | 'isHolyDayOfObligation'>> & {
    date?: string | ((year: number) => Dayjs);
    liturgicalColors?: LiturgicalColors | LiturgicalColors[];
  };

/**
 * Root interface for Constructor Interfaces. This is a workaround for
 * TypeScript's lack of "static" methods for classes.
 *
 * Based on StackOverflow user chris's solution. See
 * - https://stackoverflow.com/a/43484801/1037165
 * - https://pastebin.com/v8Rf6g6Y
 *
 * @interface IConstructor
 * @template InstanceInterface
 */
interface IConstructor<InstanceInterface> {
  /**
   * Explicitly typed constructor is required, so make an extremely permissive
   * declaration that can be refined in subclasses.
   *
   * @constructor
   */
  new (): InstanceInterface;
}

/**
 * Base [CalendarDef] interface
 */
interface BaseCalendarDef {
  inheritFrom?: string;
  calendarKey?: string;
  definitions: DateDefInput[];
  computeDates: (
    builtData: LiturgicalDefBuiltData,
    config: RomcalConfig,
  ) => LiturgicalDefBuiltData;
}

/**
 * Create a Constructor Interface by extending IConstructor and
 * specifying [BaseCalendarDef].
 * This allows to define static methods from [BaseCalendarDef]
 */
interface StaticCalendarComputing<T extends BaseCalendarDef>
  extends IConstructor<T> {
  computeCalendar: (
    builtData: LiturgicalDefBuiltData,
  ) => Record<string, LiturgicalDay[]>;
}

export const CalendarDef: StaticCalendarComputing<BaseCalendarDef> = class
  implements BaseCalendarDef
{
  definitions: DateDefInput[] = [];
  calendarKey = '';

  computeDates(
    builtData: LiturgicalDefBuiltData,
    config: RomcalConfig,
  ): LiturgicalDefBuiltData {
    if (!this.calendarKey) {
      throw new Error(`The 'calendarKey' must be defined and not empty.`);
    }

    this.definitions.forEach((def: DateDefInput) => {
      // Because a Liturgical Year is straddling 2 Gregorian year,
      // we need to compute the date on the 2 Gregorian years,
      // and then determine the one to keep between both.
      let dateInputPreviousYear;
      let dateInputCurrentYear;
      let dateInput;

      // If a date definition is defined,
      // it should be a string or a function.
      if (def.date) {
        if (config.scope === RomcalCalendarScope.Liturgical) {
          dateInputPreviousYear =
            typeof def.date === 'string'
              ? dayjs.utc(`${config.year - 1}-${def.date}`)
              : def.date(config.year - 1);
        }

        dateInputCurrentYear =
          typeof def.date === 'string'
            ? dayjs.utc(`${config.year}-${def.date}`)
            : def.date(config.year);

        const dateInputPreviousYearStr =
          dateInputPreviousYear?.format('YYYY-MM-DD');

        const dateInputCurrentYearStr =
          dateInputCurrentYear.format('YYYY-MM-DD');

        // Lookup for a matching date object, to keep the relevant date
        if (
          dateInputPreviousYearStr &&
          Array.isArray(builtData.datesIndex[dateInputPreviousYearStr])
        ) {
          dateInput = dateInputPreviousYear;
        } else if (
          Array.isArray(builtData.datesIndex[dateInputCurrentYearStr])
        ) {
          dateInput = dateInputCurrentYear;
        }
        // A temporale LiturgicalDay is generated for each day of the Liturgical Year.
        // If above no LiturgicalDay date was found, it means that the date
        // computing is out of scope. In this case romcal must throw an error.
        else {
          throw new Error(
            `DateDefInput with key '${def.key}' have a date out of scope.`,
          );
        }
      }

      const dateStr = (
        dateInput ?? dayjs(builtData.byKeys[def.key].date)
      ).format('YYYY-MM-DD');

      // If no date is defined, and no inherited LiturgicalDay exists,
      // romcal must throw an error.
      if (!builtData.byKeys[def.key] && !dateInput) {
        throw new Error(
          `DateDefInput with key '${def.key}' must have a 'date' defined.`,
        );
      }

      // If no precedence type is set, and no inherited LiturgicalDay exists,
      // romcal must throw an error.
      if (!builtData.byKeys[def.key] && !def.precedence) {
        throw new Error(
          `DateDefInput with key '${def.key}' must have a 'precedence' defined.`,
        );
      }

      // Take the first LiturgicalDay object of a specified day.
      // The first object is always a temporale LiturgicalDay,
      // since a LiturgicalDay is generated for each day of the Liturgical Year.
      const baseData: LiturgicalDay =
        builtData.byKeys[builtData.datesIndex[dateStr][0]];

      // // Obligatory Memorials may be celebrated as Optional Memorials if they
      // // happen to fall on Lenten weekdays. (UNLY #59 12)
      // if (
      //   def.precedence &&
      //   baseData.seasons.includes(LiturgicalSeasons.LENT) &&
      //   [
      //     Precedences.GeneralMemorial_10,
      //     Precedences.ProperMemorial_SecondPatron_11a,
      //     Precedences.ProperMemorial_OtherProperMemorial_11b,
      //   ].includes(def.precedence)
      // ) {
      //   def.precedence = Precedences.OptionalMemorial_12;
      // }

      // Update previous defined LiturgicalDay with the new data
      builtData.byKeys[def.key] = new LiturgicalDay({
        ...baseData,
        ...(builtData.byKeys[def.key] ?? {}),
        key: def.key,
        ...(dateInput ? { date: dateInput } : {}),
        ...(def.precedence ? { precedence: def.precedence } : {}),
        ...(def.liturgicalColors
          ? {
              liturgicalColors: Array.isArray(def.liturgicalColors)
                ? def.liturgicalColors
                : [def.liturgicalColors],
            }
          : {}),
        ...(def.isHolyDayOfObligation
          ? { isHolyDayOfObligation: def.isHolyDayOfObligation }
          : {}),
        fromCalendar: this.calendarKey,
      });

      /**
       * For Memorial and Feast celebrations only, the weekday property is added
       * containing the LiturgicalDay object of the base weekday.
       * Otherwise, this object is removed.
       *
       * - Memorials: their observance is integrated into the celebration of the occurring weekday
       *   in accordance with the norms set forth in the General Instruction of the Roman
       *   Missal and of the Liturgy of the Hours. (UNLY #14)
       * - Liturgy of the hours: // todo: cite precise sources from the General Instructions of the Liturgy of the hours
       *    - Memorials: the liturgy of the hour remain the one of the weekday.
       *    - Feasts: small hours are taken from the weekday.
       */
      if (
        [Ranks.FEAST, Ranks.MEMORIAL].includes(builtData.byKeys[def.key].rank)
      ) {
        builtData.byKeys[def.key].weekday = baseData;
      } else {
        delete builtData.byKeys[def.key].weekday;
      }

      // Now update the datesIndex object if it not already contains the matching key
      builtData.datesIndex[dateStr].indexOf(def.key) === -1 &&
        builtData.datesIndex[dateStr].unshift(def.key);
    });

    return builtData;
  }

  static computeCalendar(
    builtData: LiturgicalDefBuiltData,
  ): Record<string, LiturgicalDay[]> {
    const finalData: Record<string, LiturgicalDay[]> = {};

    Object.keys(builtData.datesIndex).forEach((dateStr) => {
      const dates: LiturgicalDay[] = builtData.datesIndex[dateStr]
        .map((key) => builtData.byKeys[key])
        .sort(
          ({ precedence: firstPrecedence }, { precedence: nextPrecedence }) => {
            const type1 = PRECEDENCES.indexOf(firstPrecedence);
            const type2 = PRECEDENCES.indexOf(nextPrecedence);
            if (type1 < type2) return -1;
            if (type1 > type2) return 1;
            return 0;
          },
        );

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
      //     - a weekdays of Lent.
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
        defaultLiturgicalDay.precedence === Precedences.PrivilegedWeekday_9 ||
        defaultLiturgicalDay.precedence === Precedences.Weekday_13
      ) {
        optionalMemorials = dates
          .slice(1)
          .filter((d) => d.precedence === Precedences.OptionalMemorial_12);
      }

      finalData[dateStr] = [defaultLiturgicalDay, ...optionalMemorials];
    });

    return finalData;
  }
};
