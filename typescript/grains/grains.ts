export default class Grains {
	private static readonly MIN_INPUT = 1;
	private static readonly MAX_INPUT = 64;

	static square(input: number): number {
		if (input < this.MIN_INPUT || input > this.MAX_INPUT) {
			throw new Error('Input must be between 1 and 64');
		}

		return 2**(input - 1);
	}

	static total(): number {
		return 2**this.MAX_INPUT;
	}
}
