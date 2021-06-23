import { GeneralRoman } from '@roman-rite/general-calendar/general';
import Temporale from '@roman-rite/general-calendar/temporale';
import { CalendarDef } from '@roman-rite/models/calendar-def';
import { RomcalConfig } from '@roman-rite/models/config';
import { BaseCalendarDef, LiturgicalCalendar } from '@roman-rite/types/calendar-def';
import { BaseRomcalConfig, RomcalConfigInput } from '@roman-rite/types/config';
import { Dates } from '@roman-rite/utils/dates';
import { CalendarScope } from '@romcal/constants/calendar-scope';

export default class Romcal {
  readonly #config: RomcalConfig;
  readonly #calendarsDef: InstanceType<BaseCalendarDef>[];
  #computedCalendar?: LiturgicalCalendar;

  /**
   * Utility helpers to compute the date(s) of specific liturgical days or seasons.
   */
  static dates = Dates;

  constructor(config?: RomcalConfigInput) {
    this.#config = new RomcalConfig(config);
    this.#calendarsDef = [new GeneralRoman(this.#config)];

    if (this.#config.particularCalendar) {
      this.#calendarsDef.push(new this.#config.particularCalendar(this.#config));
    }

    this.#calendarsDef.map((cal) => cal.updateConfig(config));
  }

  /**
   * Get the complete configuration, used to create and generate a calendar.
   */
  public get config(): BaseRomcalConfig {
    return this.#config.toObject();
  }

  /**
   * Generate a liturgical calendar, within a Liturgical or Gregorian scope.
   */
  generate(): Promise<LiturgicalCalendar> {
    // Wrap the calendar computing process in a Promise.
    // Even if this method is called with async/await, this makes this method running in a microtask queue:
    // it does not run on the main thread, meaning other things can occur (click events, rendering, etc.).
    return new Promise((resolve, reject) => {
      // Check if calendar data is already computed and saved in a cache variable.
      // If this is the case, no need to compute it again.
      if (this.#computedCalendar) {
        resolve(this.#computedCalendar);
        return;
      }

      try {
        const data =
          this.#config.scope === CalendarScope.Liturgical
            ? new Temporale(this.#config).liturgicalYearBuilder()
            : new Temporale(this.#config).gregorianYearBuilder();

        this.#calendarsDef.forEach((cal) => cal.buildDates(data));
        this.#computedCalendar = CalendarDef.generateCalendar(data);

        resolve(this.#computedCalendar);
      } catch (e) {
        reject(e);
      }
    });
  }
}

export { CalendarScope, BaseRomcalConfig, LiturgicalCalendar };
