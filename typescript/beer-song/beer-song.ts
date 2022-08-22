export default class Beer {
	private static text (bottles: number, isLong = false): string {
		return `${bottles === 0 ? 'No more' : bottles} ${bottles === 1 ? 'bottle' : 'bottles'} of beer${isLong ? ' on the wall' : ''}`;
	}

	static verse (verse: number): string {
		const words = `${this.text(verse, true)}, ${this.text(verse).toLowerCase()}.\n`;

		if (verse === 0) return `${words}Go to the store and buy some more, ${this.text(99, true)}.\n`;

		return `${words}Take ${verse === 1 ? 'it' : 'one'} down and pass it around, ${this.text(verse - 1, true).toLowerCase()}.\n`;
	}

	static sing (from = 99, to = 0): string {
		let verses = '';

		for (let i = from; i >= to; i--) verses += `${verses ? '\n' : ''}${this.verse(i)}`;

		return verses;
	}
}
