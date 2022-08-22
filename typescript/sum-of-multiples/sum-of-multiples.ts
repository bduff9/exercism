class SumOfMultiples {
	constructor(private multiples: Array<number>) {}

	to(max: number): number {
		let sum = 0;

		for (let i = 2; i < max; i++) {
			const found = this.multiples.find(multiple => i % multiple === 0);

			if (found) sum += i;
		}

		return sum;
	}
}

const getSumOfMultiples = (multiples: Array<number>) => new SumOfMultiples(multiples);

export default getSumOfMultiples;
