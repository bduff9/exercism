
type TripletSearch = {
	maxFactor: number;
	minFactor?: number;
	sum?: number;
};

export default class Triplet {
	constructor(private a: number, private b: number, private c: number) {}

	isPythagorean(): boolean {
		return this.a < this.b && this.b < this.c && this.a**2 + this.b**2 === this.c**2;
	}

	product(): number {
		return this.a * this.b * this.c;
	}

	sum(): number {
		return this.a + this.b + this.c;
	}

	static getA (b: number, c: number): number {
		return Math.sqrt(c**2 - b**2);
	}

	static getSecondFibonacciNumber(start: number): number {
		let current = 1;
		let last = 0;
		let steps = 2;

		while (steps) {
			let temp = current;

			current += last;
			last = temp;

			if (current >= start) steps--;
		}

		return current;
	}

	static where (search: TripletSearch): Array<Triplet> {
		const { minFactor, maxFactor, sum } = search;
		const triplets: Array<Triplet> = [];

		for (let a = minFactor ?? 3; a <= maxFactor - 2; a++) {
			for (let b = a + 1; b <= maxFactor - 1; b++) {
				for (let c = b + 1; c <= maxFactor; c++) {
					if (sum && sum !== a + b + c) {
						continue;
					}

					const t = new Triplet(a, b, c);

					if (t.isPythagorean()) {
						triplets.push(t);
					}
				}
			}
		}

		return triplets;
	}
}
