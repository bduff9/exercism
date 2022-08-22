export default class Series {
	constructor(private input: string) {}

	get digits(): Array<number> {
		return this.input.split('').map(char => +char);
	}

	slices(length: number): Array<Array<number>> {
		const digits = this.digits;
		const inputLength = digits.length;
		const slices: Array<Array<number>> = [];

		if (length > inputLength) throw new Error('Slice length exceeds input length');

		for (let i = 0; i <= inputLength - length; i++) {
			const subArray: Array<number> = [];

			for (let j = i; j < i + length; j++) subArray.push(digits[j]);

			slices.push(subArray);
		}

		return slices;
	}
}
