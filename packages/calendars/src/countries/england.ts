import { CalendarDefInput, DayOfWeek, PatronTitle, Precedence, ProperCycle } from '@romcal/shared';

export const England: CalendarDefInput = {
  calendarId: 'england',

  basedOn: ['general-roman', 'europe'],

  inputs: {
    aelred_of_rievaulx_abbot: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 1, date: 12 },
    },

    wulstan_of_worcester_bishop: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 1, date: 19 },
    },

    david_of_wales_bishop: {
      precedence: Precedence.ProperFeast_8f,
      dateDef: { month: 3, date: 1 },
    },

    patrick_of_ireland_bishop: {
      precedence: Precedence.ProperFeast_8f,
      dateDef: { month: 3, date: 17 },
    },

    george_of_lydda_martyr: {
      customLocaleKey: 'george_of_lydda_martyr_patron_of_england',
      precedence: Precedence.ProperSolemnity_PrincipalPatron_4a,
      dateDef: { month: 4, date: 23 },
      // When it falls between Palm Sunday and the Second Sunday of Easter inclusive,
      // it is transferred to the Monday after the Second Sunday of Easter
      dateExceptions: {
        ifIsBetween: {
          from: { dateFn: 'palmSunday' },
          to: { dateFn: 'divineMercySunday' },
          inclusive: true,
        },
        setDate: { dateFn: 'divineMercySunday', addDay: 1 },
      },
      titles: { append: [PatronTitle.PatronOfEngland] },
    },

    adalbert_of_prague_bishop: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 4, date: 24 },
    },

    fidelis_of_sigmaringen_priest: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 4, date: 24 },
    },

    english_martyrs: {
      precedence: Precedence.ProperFeast_8f,
      dateDef: { month: 5, date: 4 },
    },

    dunstan_of_canterbury_bishop: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 5, date: 19 },
    },

    bede_the_venerable_priest: {
      precedence: Precedence.ProperMemorial_11b,
      dateDef: { month: 5, date: 25 },
    },

    augustine_of_canterbury_bishop: {
      precedence: Precedence.ProperFeast_8f,
      dateDef: { month: 5, date: 27 },
    },

    boniface_of_mainz_bishop: {
      precedence: Precedence.ProperMemorial_11b,
      dateDef: { month: 6, date: 5 },
    },

    ephrem_the_syrian_deacon: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 6, date: 9 },
    },

    columba_of_iona_abbot: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 6, date: 9 },
    },

    richard_of_chichester_bishop: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 6, date: 16 },
    },

    alban_of_britain_martyr: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 6, date: 20 },
    },

    john_fisher_bishop_and_thomas_more_martyrs: {
      precedence: Precedence.ProperFeast_8f,
    },

    etheldreda_of_ely_abbess: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 6, date: 23 },
    },

    oliver_plunket_bishop: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 7, date: 1 },
    },

    dominic_of_the_mother_of_god_barberi_priest: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 8, date: 26 },
    },

    margaret_clitherow_anne_line_and_margaret_ward_virgin_martyrs: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 8, date: 30 },
      martyrology: ['margaret_clitherow_virgin_martyr', 'anne_line_virgin_martyr', 'margaret_ward_virgin_martyr'],
    },

    aidan_of_lindisfarne_bishop_and_the_saints_of_lindisfarne: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 8, date: 31 },
      martyrology: ['aidan_of_lindisfarne_bishop', 'saints_of_lindisfarne'],
    },

    gregory_i_the_great_pope: {
      precedence: Precedence.ProperFeast_8f,
    },

    cuthbert_of_lindisfarne_bishop: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 9, date: 4 },
    },

    theodore_of_canterbury_bishop: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 9, date: 19 },
    },

    our_lady_of_walsingham: {
      precedence: Precedence.ProperMemorial_11b,
      dateDef: { month: 9, date: 24 },
    },

    john_henry_newman_priest: {
      precedence: Precedence.ProperFeast_8f,
      dateDef: { month: 10, date: 9 },
    },

    denis_of_paris_bishop_and_companions_martyrs: {
      dateDef: { month: 10, date: 10 },
    },

    john_leonardi_priest: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 10, date: 10 },
    },

    paulinus_of_york_bishop: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 10, date: 10 },
    },

    peter_and_paul_apostles: {
      // In England and Wales when the celebration falls on either a
      // Saturday or a Monday it is transferred to the Sunday.
      dateExceptions: [
        {
          ifIsDayOfWeek: DayOfWeek.Monday, // if is a Monday
          setDate: { subtractDay: 1 },
        },
        {
          ifIsDayOfWeek: DayOfWeek.Saturday, // if is a Saturday
          setDate: { addDay: 1 },
        },
      ],
    },

    assumption_of_the_blessed_virgin_mary: {
      dateDef: { month: 8, date: 15 },
      // In England and Wales when the celebration falls on either a
      // Saturday or a Monday it is transferred to the Sunday.
      dateExceptions: [
        {
          ifIsDayOfWeek: DayOfWeek.Monday, // if is a Monday
          setDate: { subtractDay: 1 },
        },
        {
          ifIsDayOfWeek: DayOfWeek.Saturday, // if is a Saturday
          setDate: { addDay: 1 },
        },
      ],
    },

    wilfrid_of_york_bishop: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 10, date: 12 },
    },

    edward_the_confessor: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 10, date: 13 },
    },

    chad_of_mercia_and_cedd_of_lastingham_bishops: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 10, date: 26 },
      martyrology: ['chad_of_mercia_bishop', 'cedd_of_lastingham_bishop'],
    },

    winefride_of_flintshire_virgin: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 11, date: 3 },
    },

    willibrord_of_utrecht_bishop: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 11, date: 7 },
    },

    edmund_of_abingdon_bishop: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 11, date: 16 },
    },

    margaret_of_scotland: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 11, date: 16 },
    },

    elizabeth_of_hungary_religious: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 11, date: 17 },
    },

    hilda_of_whitby_abbess: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 11, date: 17 },
    },

    hugh_of_lincoln_bishop: {
      precedence: Precedence.OptionalMemorial_12,
      dateDef: { month: 11, date: 17 },
    },

    andrew_apostle: {
      precedence: Precedence.ProperFeast_8f,
      dateDef: { month: 11, date: 30 },
    },

    // In England and Wales when All Saints (1 November) falls on a Saturday
    // and is transferred to Sunday, All Souls is transferred to Monday 3 November.
    // Like Ash Wednesday, All Souls is, technically, without rank.
    // However, in countries (not England & Wales) where it falls
    // on a Sunday it replaces the Sunday.
    all_saints: {
      dateDef: { month: 11, date: 1 },
      dateExceptions: {
        ifIsDayOfWeek: DayOfWeek.Saturday, // if is a Saturday
        setDate: { addDay: 1 },
      },
    },

    commemoration_of_all_the_faithful_departed: {
      dateDef: { month: 11, date: 2 },
      dateExceptions: {
        ifIsDayOfWeek: DayOfWeek.Sunday, // if is a Sunday
        setDate: { addDay: 1 },
      },
    },

    thomas_becket_bishop: {
      precedence: Precedence.ProperFeast_8f,
      dateDef: { month: 12, date: 29 },
    },

    our_lord_jesus_christ_the_eternal_high_priest: {
      precedence: Precedence.ProperFeast_8f,
      dateDef: { dateFn: 'pentecostSunday', addDay: 4 },
      properCycle: ProperCycle.ProperOfTime,
    },
  },
};