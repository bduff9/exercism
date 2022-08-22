const KILOOHM = 1000;
const COLORS = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9,
} as const;

type Color = keyof typeof COLORS;

const getZeroes = (count: number): string => {
  let str = '';

  while (str.length < count) str += '0';

  return str;
};

export const decodedResistorValue = (colors: [Color, Color, Color]): string => {
  const ohms = Number(`${COLORS[colors[0]]}${COLORS[colors[1]]}${getZeroes(COLORS[colors[2]])}`);

  if (ohms < KILOOHM) {
    return `${ohms} ohms`;
  }

  return `${ohms / KILOOHM} kiloohms`;
};
