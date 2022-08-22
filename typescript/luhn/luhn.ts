
export default class Luhn {
	static valid (rawNumber: string): boolean {
		const numberString = rawNumber.replace(/\s/g, '');
		const invalid = numberString.length < 2 || numberString.match(/\D/g);

		if (invalid) return false;

		return numberString.split('').reverse().reduce((count, number, i) => {
			if (i % 2 === 1) {
				let doubled = +number * 2;

				if (doubled > 9) doubled -= 9;

				return count + doubled;
			}

			return count + +number;
		}, 0) % 10 === 0;
	}
}
