export default class PigLatin {
	private static readonly SUFFIX = 'ay';

	static lettersToMove (word: string): number {
		if (word.match(/^[aeiou].+$/i)) return 0;

		if (word.match(/^thr.+/i)) return 3;

		if (word.match(/^sch.+/i)) return 3;

		if (word.match(/^[^aeiou]qu.+/i)) return 3;

		if (word.match(/^ch.+/i)) return 2;

		if (word.match(/^qu.+/i)) return 2;

		if (word.match(/^th.+/i)) return 2;

		return 1;
	}

	static translateWord (word: string): string {
		const letters = this.lettersToMove(word);
		const firstLetters = word.substring(0, letters);
		const rest = word.substring(letters, word.length);

		return `${rest}${firstLetters}${this.SUFFIX}`;

	}

	static translate (input: string): string {
		return input.split(' ').map(word => this.translateWord(word)).join(' ');
	}
}
