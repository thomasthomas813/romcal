import dayjs from 'dayjs';

import * as Locales from '@romcal/lib/Locales';
import * as Dates from '@romcal/lib/Dates';
import { LiturgicalColors } from '@romcal/constants/liturgical-colors/liturgical-colors.enum';
import { RomcalDateItemInput } from '@romcal/models/romcal-date-item/romcal-date-item.model';
import RomcalConfig, { RomcalConfigInCalendarDef } from '@romcal/models/romcal-config/romcal-config.model';
import { Ranks } from '@romcal/constants/ranks/ranks.enum';
import { CelebrationsCycle } from '@romcal/constants/cycles/cycles.enum';
import { Titles } from '@romcal/constants/titles/titles.enum';

const defaultConfig: RomcalConfigInCalendarDef | undefined = undefined;

const dates = async (config: RomcalConfig): Promise<Array<RomcalDateItemInput>> => {
  const year = config.year;
  const _dates: Array<RomcalDateItemInput> = [
    {
      key: 'saintPatrickBishop',
      rank: Ranks.SOLEMNITY,
      date: dayjs.utc(`${year}-3-17`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'saintLouisMarieGrignionDeMontfortPriest',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-27`),
    },
    {
      key: 'saintPeterChanelPriestAndMartyr',
      rank: Ranks.MEMORIAL,
      date: dayjs.utc(`${year}-4-28`),
      liturgicalColors: LiturgicalColors.RED,
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'ourLadyHelpOfChristians',
      rank: Ranks.SOLEMNITY,
      date: dayjs.utc(`${year}-5-24`),
    },
    {
      key: 'blessedPeterToRotMartyr',
      rank: Ranks.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-7-7`),
      metadata: {
        titles: [Titles.MARTYR],
      },
    },
    {
      key: 'saintMaryOfTheCrossVirgin',
      rank: Ranks.SOLEMNITY,
      date: dayjs.utc(`${year}-8-8`),
      liturgicalColors: LiturgicalColors.WHITE,
    },
    {
      key: 'ourLordJesusChristTheEternalHighPriest',
      rank: Ranks.FEAST,
      date: ((y: number): dayjs.Dayjs => dayjs.utc(Dates.pentecostSunday(y).add(4, 'day').toISOString()))(year),
      liturgicalColors: LiturgicalColors.WHITE,
      cycles: { celebrationCycle: CelebrationsCycle.TEMPORALE },
    },
  ];

  // Get localized celebration names
  return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
