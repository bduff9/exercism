const isLeapYear = (year: number): boolean => {
  const isDivisibleBy400 = year % 400 === 0;

  if (isDivisibleBy400) return true;

  const isDivisibleBy100 = isDivisibleBy400 || year % 100 === 0;

  if (isDivisibleBy100) return false;

  const isDivisibleBy4 = isDivisibleBy400 || isDivisibleBy100 || year % 4 === 0;

  return isDivisibleBy4;
};

export default isLeapYear;
