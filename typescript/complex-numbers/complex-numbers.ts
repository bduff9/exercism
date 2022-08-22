export default class ComplexNumber {
	constructor(public real: number, public imag: number) {}

	get abs (): number {
		return Math.sqrt(this.real**2 + this.imag**2);
	}

	get conj (): ComplexNumber {
		return new ComplexNumber(this.real, this.imag === 0 ? 0 : -1 * this.imag);
	}

	get exp (): ComplexNumber {
		return new ComplexNumber(Math.exp(this.real) * Math.cos(this.imag), Math.sin(this.imag));
	}

	add(toAdd: ComplexNumber): ComplexNumber {
		return new ComplexNumber((this.real + toAdd.real), (this.imag + toAdd.imag));
	}

	div(toDivide: ComplexNumber): ComplexNumber {
		return new ComplexNumber((this.real * toDivide.real + this.imag * toDivide.imag)/(toDivide.real**2 + toDivide.imag**2), (this.imag * toDivide.real - this.real * toDivide.imag)/(toDivide.real**2 + toDivide.imag**2));
	}

	mul(toMultiply: ComplexNumber): ComplexNumber {
		return new ComplexNumber((this.real * toMultiply.real - this.imag * toMultiply.imag), (this.imag * toMultiply.real + this.real * toMultiply.imag));
	}

	sub(toSubtract: ComplexNumber): ComplexNumber {
		return new ComplexNumber((this.real - toSubtract.real), (this.imag - toSubtract.imag));
	}
}
