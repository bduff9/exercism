export default class Series {
	constructor(private input: string) {}

	private validateInput(length: number): void {
		if (this.input.match(/\D/g) || length < 0) throw new Error('Invalid input.');

		if (length > this.input.length) throw new Error('Slice size is too big.');
	}

	largestProduct(length: number): number {
		this.validateInput(length);

		if (length === 0) return 1;

		const numbers = this.input.split('').map(number => +number);
		let product = 0;

		for (let i = 0; i <= numbers.length - length; i++) {
			let currProduct = numbers[i];

			for (let j = 1; j < length; j++) currProduct *= numbers[i + j];

			if (currProduct > product) product = currProduct;
		}

		return product;
	}
}
