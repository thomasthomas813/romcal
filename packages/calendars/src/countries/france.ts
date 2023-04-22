import { CalendarDefInput, PatronTitle, Precedence } from '@romcal/shared';

export const France: CalendarDefInput = {
  calendarId: 'france',

  basedOn: ['general-roman', 'europe'],

  config: {
    epiphanyOnSunday: true,
    ascensionOnSunday: false,
    corpusChristiOnSunday: true,
  },

  inputs: {
    genevieve_of_paris_virgin: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 1, date: 3 },
    },

    remigius_of_reims_bishop: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 1, date: 15 },
    },

    bernadette_soubirous_virgin: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 2, date: 18 },
    },

    ivo_of_kermartin_priest: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 5, date: 19 },
    },

    joan_of_arc_virgin: {
      customLocaleKey: 'joan_of_arc_virgin_copatroness_of_france',
      precedence: Precedence.ProperMemorial_SecondPatron_11a,
      dateDef: { month: 5, date: 30 },
      titles: { append: [PatronTitle.CopatronessOfFrance] },
    },

    pothinus_of_lyon_bishop_blandina_of_lyon_virgin_and_companions_martyrs: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 6, date: 2 },
      martyrology: ['pothinus_of_lyon_bishop', 'blandina_of_lyon_virgin', 'companions_martyrs'],
    },

    clotilde_of_burgundy: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 6, date: 4 },
    },

    caesarius_of_arles_bishop: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 8, date: 26 },
    },

    therese_of_the_child_jesus_and_the_holy_face_of_lisieux_virgin: {
      customLocaleKey: 'therese_of_the_child_jesus_and_the_holy_face_of_lisieux_virgin_copatroness_of_france',
      titles: { append: [PatronTitle.CopatronessOfFrance] },
    },
  },
};