const Rational = function (numerator, denominator) {
	let a = numerator;
	let b = denominator;

	if (a !== 0 && b < 0) {
		a = -1 * a;
		b = -1 * b;
	} else if (a === 0) {
		b = 1;
	}

	this.numerator = a;
	this.denominator = b;
	this.value = a / b;
};

Rational.prototype.add = function (secondRational) {
	const numerator = this.numerator * secondRational.denominator + this.denominator * secondRational.numerator;
	const denominator = Math.abs(secondRational.numerator * secondRational.denominator);

	return new Rational(numerator, denominator);
};

Rational.prototype.sub = function (secondRational) {
	const numerator = this.numerator * secondRational.denominator - this.denominator * secondRational.numerator;
	const denominator = Math.abs(secondRational.numerator * secondRational.denominator);

	return new Rational(numerator, denominator);
};

Rational.prototype.mul = function (secondRational) {
	const numerator = this.numerator * secondRational.numerator;
	const denominator = this.denominator * secondRational.denominator;

	return new Rational(numerator, denominator).reduce();
};

Rational.prototype.div = function (secondRational) {
	const numerator = this.numerator * secondRational.denominator;
	const denominator = this.denominator * secondRational.numerator;

	return new Rational(numerator, denominator);
};

Rational.prototype.abs = function () {
	return new Rational(Math.abs(this.numerator), Math.abs(this.denominator));
};

Rational.prototype.exprational = function (pow) {
	return new Rational(Math.pow(this.numerator, pow), Math.pow(this.denominator, pow));
};

Rational.prototype.expreal = function (num) {
	let value = Math.pow(num, this.value);
	let rounded = Math.round(value);

	// Required to handle rounding issue on 15.999999999999998
	if (Math.abs(rounded - value) < 0.001) return rounded;

	return value;
};

Rational.prototype.reduce = function () {
	let a = this.numerator;
	let b = this.denominator;
	let min = Math.min(Math.abs(a), Math.abs(b)) + 1;

	for (let i = min; i--;) {
		if (a % i === 0 && b % i === 0) {
			a = a / i;
			b = b / i;
		}
	}

	return new Rational(a, b);
};

module.exports = Rational;
