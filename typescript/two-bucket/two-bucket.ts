export const Bucket = {
	One: 1,
	Two: 2,
} as const;

type BucketLabel = 'one' | 'two';
type BucketID = typeof Bucket[keyof typeof Bucket];

export class TwoBucket {
	public otherBucket: number;
	public goalBucket: BucketLabel;
	private numberOfMoves: number;

	constructor(private bucket1Size: number, private bucket2Size: number, private target: number, public starterBucket: BucketID) {
		const [goalBucket, moves, remaining] = this.calculate();

		this.otherBucket = remaining;
		this.goalBucket = goalBucket;
		this.numberOfMoves = moves;
	}

	private isEmpty(water: number): boolean {
		return water === 0;
	}

	private isFull(water: number, capacity: number): boolean {
		return water >= capacity;
	}

	private empty(): number {
		return 0;
	}

	private fill(capacity: number): number {
		return capacity;
	}

	private transfer(water1: number, water2: number, capacity2: number): [number, number] {
		const remaining = capacity2 - water2;

		if (water1 > remaining) {
			return [water1 - remaining, this.fill(capacity2)];
		}

		return [this.empty(), water2 + water1];
	}

	private calculate (): [BucketLabel, number, number] {
		const [starterSize, otherSize, starterLabel, otherLabel] =
			this.starterBucket === 1 ?
				[this.bucket1Size, this.bucket2Size, 'one' as const, 'two' as const]
				:
				[this.bucket2Size, this.bucket1Size, 'two' as const, 'one' as const];
		let starterBucket = this.empty();
		let otherBucket = this.empty();
		let moves = 0;

		while (starterBucket !== this.target && otherBucket !== this.target) {
			if (this.isEmpty(starterBucket)) {
				starterBucket = this.fill(starterSize);
			} else if (this.isFull(otherBucket, otherSize)) {
				otherBucket = this.empty();
			} else {
				[starterBucket, otherBucket] = this.transfer(starterBucket, otherBucket, otherSize);
			}

			moves++;
		}

		return [
			starterBucket === this.target ? starterLabel : otherLabel,
			moves,
			starterBucket === this.target ? otherBucket : starterBucket,
		];
	}

	moves (): number {
		return this.numberOfMoves;
	}
}
