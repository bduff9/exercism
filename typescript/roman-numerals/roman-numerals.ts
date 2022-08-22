export default class RomanNumerals {
  static tenAndUnder (input: number): string {
    if (input < 4) return 'I'.repeat(input);

    if (input === 4) return 'IV';

    if (input === 5) return 'V';

    if (input < 9) return `V${'I'.repeat(input - 5)}`;

    if (input === 9) return 'IX';

    if (input === 10) return 'X';

    throw new Error(`Input is over 10: ${input}`);
  }

  static underOneHundred (input: number): string {
    if (input === 40) return 'XL';

    if (input === 50) return 'L';

    if (input < 90) return `L${'X'.repeat((input - 50) / 10)}`;

    if (input === 90) return 'XC';

    throw new Error(`Input is over 100: ${input}`);
  }

  static underOneThousand (input: number): string {
    if (input < 400) return 'C'.repeat(Math.floor(input / 100));

    if (input === 400) return 'CD';

    if (input === 500) return 'D';

    if (input < 900) return `D${'C'.repeat((input - 500) / 100)}`;

    if (input === 900) return 'CM';

    throw new Error(`Input is over 1000: ${input}`);
  }

  static underTenThousand (input: number): string {
    if (input < 4000) return 'M'.repeat(Math.floor(input / 1000));

    throw new Error(`Input is over 3999: ${input}`);
  }

  static roman(input: number): string {
    let output = '';

    while (input > 0) {
      let number: number;

      if (input >= 1000) { // 1000+
        number = input - (input % 1000);
        output += this.underTenThousand(number);
      } else if (input >= 100) { // 100 - 999
        number = input - (input % 100);
        output += this.underOneThousand(number);
      } else if (input >= 40) { // 40 - 99
        number = input - (input % 10);
        output += this.underOneHundred(number);
      } else { // 0 - 39
        number = input > 10 ? 10 : input;
        output += this.tenAndUnder(number);
      }

      input -= number;
    }

    return output;
  }
}
