class BeerSong {
	capitalize (word) {
		return word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase();
	}

	pluralize (noun, count) {
		const ZERO = 'no more';

		if (count === 1) return `1 ${noun}`;
		if (count === 0) return `${ZERO} ${noun}s`;

		return `${count} ${noun}s`;
	}

	sing (startingCount, endingCount) {
		let song = '';
		let end = endingCount || 0;
		
		for (let currentCount = startingCount; currentCount >= end; currentCount--) song += `${(song ? '\n' : '')}${this.verse(currentCount)}`;

		return song;
	}

	verse (beerCount) {
		const newBeerCount = beerCount - 1;
		const bottle = this.pluralize('bottle', beerCount);
		const newBottle = this.pluralize('bottle', newBeerCount);
		const pronoun = (beerCount === 1 ? 'it' : 'one');
		const FIRST_LINE = `${this.capitalize(bottle)} of beer on the wall, ${bottle} of beer.\n`;
		const SECOND_LINE = `Take ${pronoun} down and pass it around, ${newBottle} of beer on the wall.\n`;
		const ZERO_LINE = 'Go to the store and buy some more, 99 bottles of beer on the wall.\n';

		if (beerCount === 0) return FIRST_LINE + ZERO_LINE;

		return FIRST_LINE + SECOND_LINE;
	}
}

module.exports = BeerSong;
