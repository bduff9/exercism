export default class Say {
	private readonly DIGITS: Record<number, string> = {
		0: 'zero',
		1: 'one',
		2: 'two',
		3: 'three',
		4: 'four',
		5: 'five',
		6: 'six',
		7: 'seven',
		8: 'eight',
		9: 'nine',
		10: 'ten',
		11: 'eleven',
		12: 'twelve',
		13: 'thirteen',
		15: 'fifteen',
		20: 'twenty',
		30: 'thirty',
		40: 'forty',
		50: 'fifty',
		60: 'sixty',
		70: 'seventy',
		80: 'eighty',
		90: 'ninety',
		100: 'hundred',
		1000: 'thousand',
		1000000: 'million',
		1000000000: 'billion',
	};
	private readonly MIN = 0;
	private readonly MAX = 999999999999;

	private upToOneThousand (number: number): string {
		if (number < this.MIN || number > 1000) throw new Error('Number must be between 0 and 1,000.');

		let english = '';

		do {
			if (number < 13) {
				english += this.DIGITS[number];
				number -= number;
				continue;
			}

			if (number < 20) {
				const word = this.DIGITS[number];

				if (word) {
					english += word;
				} else {
					english += `${this.DIGITS[number - 10]}teen`;
				}

				number -= number;
				continue;
			}

			if (number < 100) {
				const tens = Math.floor(number / 10) * 10;
				number -= tens;
				english += `${this.DIGITS[tens]}${number > 0 ? '-' : ''}`;
				continue;
			}

			if (number < 1000) {
				const hundreds = Math.floor(number / 100);
				number -= hundreds * 100;
				english += `${this.DIGITS[hundreds]} ${this.DIGITS[100]}${number > 0 ? ' ' : ''}`;
				continue;
			}
		} while (number > this.MIN);

		return english;
	}

	inEnglish(number: number): string {
		if (number < this.MIN || number > this.MAX) throw new Error('Number must be between 0 and 999,999,999,999.');

		let english = '';

		do {
			if (number < 1000) {
				english += `${this.upToOneThousand(number)}`;
				number -= number;
				continue;
			}

			if (number < 1000000) {
				const thousands = Math.floor(number / 1000);
				const numThousands = this.upToOneThousand(thousands);
				number -= thousands * 1000;
				english += `${numThousands} ${this.DIGITS[1000]}${number > 0 ? ' ' : ''}`;
				continue;
			}

			if (number < 1000000000) {
				const millions = Math.floor(number / 1000000);
				const numMillions = this.upToOneThousand(millions);
				number -= millions * 1000000;
				english += `${numMillions} ${this.DIGITS[1000000]}${number > 0 ? ' ' : ''}`;
				continue;
			}

			const billions = Math.floor(number / 1000000000);
			const numBillions = this.upToOneThousand(billions);
			number -= billions * 1000000000;
			english += `${numBillions} ${this.DIGITS[1000000000]}${number > 0 ? ' ' : ''}`;
			continue;
		} while (number > this.MIN);

		return english;
	}
}
