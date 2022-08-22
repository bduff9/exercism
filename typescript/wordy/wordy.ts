export class ArgumentError extends Error {}

type TMathOperation = 'plus' | 'minus' | 'multipliedby' | 'dividedby';
type TWordValue = {
	mode: null | TMathOperation;
	value: number;
};

export class WordProblem {
	constructor(private question: string) {}

	answer(): number {
		const matches = this.question.match(/^What is (-?\d.*)\?$/);

		if (!matches) throw new ArgumentError('Invalid question passed in constructor');

		const args = matches[1].replace(/ by/g, 'by').split(' ');
		const value = args.reduce((acc, value) => {
			if (['plus', 'minus', 'multipliedby', 'dividedby'].includes(value)) {
				acc.mode = value as TMathOperation;

				return acc;
			}

			const num = parseInt(value, 10);

			if (Number.isNaN(num)) throw new ArgumentError(`Invalid number found: ${value}`);

			switch (acc.mode) {
				case 'plus': acc.value += num; break;
				case 'minus': acc.value -= num; break;
				case 'multipliedby': acc.value *= num; break;
				case 'dividedby': acc.value /= num; break;
				default: throw new ArgumentError(`Invalid operation found: ${acc.mode}`);
			}

			acc.mode = null;

			return acc;
		}, { mode: 'plus', value: 0 } as TWordValue);

		return value.value;
	}
}
