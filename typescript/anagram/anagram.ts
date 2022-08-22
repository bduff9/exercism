export default class Anagram {
	constructor(private input: string) {}

	matches(...wordList: Array<string>): Array<string> {
		const letters = this.input.toLowerCase().split('');
		const length = letters.length;

		return wordList
				.filter(word => word.length === length && this.input.toLowerCase() !== word.toLowerCase())
				.filter(word => {
					const letterBank = word.toLowerCase().split('');

					for (const letter of letters) {
						const index = letterBank.indexOf(letter);

						if (index === -1) return false;

						letterBank.splice(index, 1);
					}

					return true;
				});
	}
}
