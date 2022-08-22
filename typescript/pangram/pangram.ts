export default class Pangram {
	constructor(private sentence: string) {}

	isPangram(): boolean {
		const formattedSentence = this.sentence.toLowerCase().replace(/[^a-z]*/g, '');

		if (formattedSentence.length < 26) return false;

		const unique = new Set(formattedSentence.split(''));

		return unique.size === 26;
	}
}
