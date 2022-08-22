export default class House {
	private static readonly ITEMS = [
		['house', 'Jack built.'],
		['malt', 'lay in'],
		['rat', 'ate'],
		['cat', 'killed'],
		['dog', 'worried'],
		['cow with the crumpled horn', 'tossed'],
		['maiden all forlorn', 'milked'],
		['man all tattered and torn', 'kissed'],
		['priest all shaven and shorn', 'married'],
		['rooster that crowed in the morn', 'woke'],
		['farmer sowing his corn', 'kept'],
		['horse and the hound and the horn', 'belonged to'],
	];

	static verse(number: number): Array<string> {
		let text = 'This is';

		for (let i = number; i--;) {
			const [object, verb] = House.ITEMS[i];

			text += ` the ${object}${i > 0 ? '\n' : ' '}that ${verb}`;
		}

		return text.split('\n');
	}

	static verses(from: number, to: number): Array<string> {
		let verses: Array<string> = [];

		for (let i = from; i <= to; i++) {
			if (verses.length > 0) verses.push('');

			verses = [...verses, ...House.verse(i)];
		}

		return verses;
	}
}
