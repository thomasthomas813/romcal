import { ProperCycles } from '../../../core/src/constants/cycles';
import { Precedences } from '../../../core/src/constants/precedences';
import { CalendarDef } from '../../../core/src/models/calendar-def';
import { Inputs, ParticularConfig } from '../../../core/src/types/calendar-def';
import { PatronTitles, Titles } from '../metadata/martyrology-metadata';

export class Australia extends CalendarDef {
  particularConfig: ParticularConfig = {
    epiphanyOnSunday: false,
    ascensionOnSunday: false,
    corpusChristiOnSunday: false,
  };

  inputs: Inputs = {
    patrick_of_ireland_bishop: {
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      dateDef: { month: 3, date: 17 },
    },

    louis_grignion_de_montfort_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 4, date: 27 },
    },

    peter_chanel_priest: {
      customLocaleId: 'peter_chanel_priest_patron_of_oceania',
      precedence: Precedences.ProperMemorial_11b,
      martyrology: ['peter_chanel_priest'],
      titles: [Titles.ProtoMartyrOfOceania, PatronTitles.PatronOfOceania],
    },

    our_lady_help_of_christians: {
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      dateDef: { month: 5, date: 24 },
    },

    peter_to_rot_martyr: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 7, date: 7 },
    },

    mary_of_the_cross_mackillop_virgin: {
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      dateDef: { month: 8, date: 8 },
    },

    our_lord_jesus_christ_the_eternal_high_priest: {
      precedence: Precedences.ProperFeast_8f,
      dateDef: { dateFn: 'pentecostSunday', addDay: 4 },
      properCycle: ProperCycles.ProperOfTime,
    },
  };
}