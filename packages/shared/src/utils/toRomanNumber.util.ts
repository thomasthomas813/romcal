const numerals: Record<string, number> = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

/**
 * Convert arabic numbers to roman numerals.
 * Inspired by https://github.com/jonschlinkert/romanize
 */
export const toRomanNumber = (number: number): string => {
  if (!Number.isInteger(number)) throw new Error('Number must be an integer');
  if (number < 0) throw new Error('Cannot convert negative numbers to Roman numerals');
  if (number > 3999) throw new Error('Cannot convert numbers greater than 3999 to Roman numerals');

  const keys = Object.keys(numerals);
  let str = '';

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    str += key.repeat((number / numerals[key]) >>> 0);
    number %= numerals[key];
  }
  return str;
};