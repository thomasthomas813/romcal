import { CalendarDefInput, Precedence } from '@romcal/shared';

export const Finland: CalendarDefInput = {
  calendarId: 'finland',

  basedOn: ['general-roman', 'europe'],

  inputs: {
    henry_of_finland_bishop: {
      precedence: Precedence.ProperSolemnity_PrincipalPatron_4a,
      dateDef: { month: 1, date: 19 },
    },

    eric_ix_of_sweden_martyr: {
      precedence: Precedence.ProperMemorial_11b,
      dateDef: { month: 5, date: 18 },
    },

    hemming_of_turku_bishop: {
      precedence: Precedence.ProperMemorial_11b,
      dateDef: { month: 5, date: 22 },
    },

    mary_ursula_of_jesus_ledochowska_virgin: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 5, date: 29 },
    },

    elizabeth_hesselblad_religious: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 6, date: 4 },
    },

    josemaria_escriva_de_balaguer_priest: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 6, date: 26 },
    },

    canute_iv_of_denmark_martyr: {
      precedence: Precedence.ProperMemorial_11b,
      dateDef: { month: 7, date: 10 },
    },

    thorlac_of_iceland_bishop: {
      precedence: Precedence.ProperMemorial_11b,
      dateDef: { month: 7, date: 20 },
    },

    olaf_ii_of_norway_martyr: {
      precedence: Precedence.ProperMemorial_11b,
      dateDef: { month: 5, date: 29 },
    },

    nicholas_steno_bishop: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 11, date: 25 },
    },
  },
};