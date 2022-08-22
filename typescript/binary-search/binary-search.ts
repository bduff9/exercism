export default class BinarySearch {
	private readonly NOT_FOUND = -1 as const;
	public array: number[] | undefined = undefined;

	constructor(array: number[]) {
		let current = array[0];
		const sorted = array.every(value => {
			if (current <= value) {
				current = value;

				return true;
			}

			return false;
		});

		if (sorted) {
			this.array = array;
		}
	}

	indexOf(value: number): number {
		if (!this.array) return this.NOT_FOUND;

		let min = 0;
		let max = this.array.length - 1;

		while (min < max) {
			const half = Math.floor((max - min) / 2) + min;
			const number = this.array[half];

			if (value === number) return half;

			if (value < number) {
				max = half - 1;
			} else if (value > number) {
				min = half + 1;
			}
		}

		return this.NOT_FOUND;
	}
}
