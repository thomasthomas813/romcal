export interface Locale {
  key: string;
  ordinals?: LocaleOrdinals;
  roman_rite?: LocaleRomanRite;
  colors?: LocaleColors;
  martyrology?: LocaleMartyrology;
}

// export type LocaleOrdinals = Record<string, string | ((n: number) => string)>;
export type LocaleOrdinals =
  | Record<string, string>
  | Record<'default', (n: number) => string>;

export type LocaleColors = {
  black?: string;
  gold?: string;
  green?: string;
  purple?: string;
  red?: string;
  rose: string;
  white?: string;
};

export type LocaleRomanRite = {
  seasons?: {
    advent?: {
      season?: string;
      weekday?: string;
      sunday?: string;
    };
    christmastide?: {
      season?: string;
      day?: string;
      octave?: string;
      before_epiphany?: string;
      second_sunday_after_christmas?: string;
      after_epiphany?: string;
    };
    ordinary_time?: {
      season?: string;
      weekday?: string;
      sunday?: string;
    };
    lent?: {
      season?: string;
      weekday?: string;
      sunday?: string;
      day_after_ash_wed?: string;
      holy_week_day?: string;
    };
    paschal_triduum?: {
      season?: string;
    };
    eastertide?: {
      season?: string;
      weekday?: string;
      sunday?: string;
      octave?: string;
    };
  };
  periods?: {
    epiphany?: string;
    holy_week?: string;
  };
  ranks?: {
    solemnity?: string;
    sunday?: string;
    feast?: string;
    memorial?: string;
    weekday?: string;
  };
  celebrations?: Record<string, string>;
};

export type LocaleMartyrology = Record<string, string>;
