export default class ISBN {
	private readonly ISBN_LENGTH = 10;

	constructor(private input: string) {}

	private processISBN(): Array<number> {
		const matches = this.input.match(/^(\d)-?(\d{3})-?(\d{5})-?([\dX])$/);

		if (!matches) return [];

		const [_, ...rest] = matches;

		return rest.map(char =>
			char.split('').map(c => c === 'X' ? 10 : +c),
		).flat();
	}

	isValid(): boolean {
		const processed = this.processISBN();

		if (processed.length !== this.ISBN_LENGTH) return false;

		const calc = processed.reduce((acc, num, i) =>
			acc + num * (this.ISBN_LENGTH - i),
			0,
		);

		return calc % 11 === 0;
	}
}
