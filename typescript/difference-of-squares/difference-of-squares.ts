export default class Squares {
	constructor(private n: number) {}

	get squareOfSum(): number {
		return (.5 * this.n**2 + .5 * this.n)**2;
	}

	get sumOfSquares(): number {
		return (this.n**2 + this.n) * (2 * this.n + 1) / 6
	}

	get difference(): number {
		return this.squareOfSum - this.sumOfSquares;
	}
}
