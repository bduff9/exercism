export default class RationalNumber {
	public numerator: number;
	public denominator: number;

	constructor(numerator: number, denominator: number) {
		if (numerator === 0) {
			this.numerator = numerator;
			this.denominator = 1;
		} else {
			const gcd = this.gcd(numerator, denominator);

			this.numerator = numerator / gcd;
			this.denominator = denominator / gcd;
		}
	}

	add(rational: RationalNumber): RationalNumber {
		const numerator = this.numerator * rational.denominator + this.denominator * rational.numerator;
		const denominator = this.denominator * rational.denominator;

		return new RationalNumber(numerator, denominator);
	}

	abs(): RationalNumber {
		return new RationalNumber(Math.abs(this.numerator), Math.abs(this.denominator));
	}

	div(rational: RationalNumber): RationalNumber {
		const numerator = this.numerator * rational.denominator;
		const denominator = rational.numerator * this.denominator;

		if (denominator === 0) return new RationalNumber(0, 1);

		return new RationalNumber(numerator, denominator);
	}

	exprational(power: number): RationalNumber {
		if (power >= 0) {
			const numerator = this.numerator ** power;
			const denominator = this.denominator ** power;

			return new RationalNumber(numerator, denominator);
		}

		const numerator = this.denominator ** (power * -1);
		const denominator = this.numerator ** (power * -1);

		return new RationalNumber(numerator, denominator);
	}

	expreal(real: number): number {
		return 2 ** (Math.log2(real ** this.numerator) / this.denominator);
	}

	gcd(numerator: number, denominator: number): number {
		const lower = Math.min(Math.abs(numerator), Math.abs(denominator));
		const multiplier = (numerator < 0 && denominator < 0) || (numerator > 0 && denominator < 0) ? -1 : 1;

		for (let gcd = lower; gcd > 1; gcd--) {
			if (numerator % gcd === 0 && denominator % gcd === 0) {
				return gcd * multiplier;
			}
		}

		return multiplier;
	}

	mul(rational: RationalNumber): RationalNumber {
		const numerator = this.numerator * rational.numerator;
		const denominator = this.denominator * rational.denominator;

		return new RationalNumber(numerator, denominator);
	}

	reduce(): RationalNumber {
		/**
		 * NOTE: I know this is here to return a reduced version, meaning we should
		 * store the raw version in this.numerator and this.denominator, however, the
		 * instructions say "Your implementation of rational numbers should always be
		 * reduced to lowest terms" and there is no test to test that we're storing the
		 * raw version.
		 *
		 * All tests (including reduce and multiplication/division) just test for the
		 * reduced version, so I have opted to do the reducing in the constructor.
		 *
		 * If this was not suitable (i.e. the raw values were needed for something), I
		 * would move that out of the constructor and into here, and just call this
		 * reduce function after all ops (add, subtract, multiple, etc.).
		 */
		return this;
	}

	sub(rational: RationalNumber): RationalNumber {
		const numerator = this.numerator * rational.denominator - this.denominator * rational.numerator;
		const denominator = this.denominator * rational.denominator;

		return new RationalNumber(numerator, denominator);
	}
}
