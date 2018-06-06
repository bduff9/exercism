const Anagram = function (word) {
	this.originalWord = word;
	this.word = word.toLowerCase();
};

Anagram.prototype.matches = function (possibleMatches) {
	if (!Array.isArray(possibleMatches)) possibleMatches = [...arguments];

	const matches = possibleMatches.filter(match => {
		let originalWord = this.word;

		if (originalWord === match.toLowerCase()) return false;

		if (originalWord.length !== match.length) return false;

		for (let i = 0; i < match.length; i++) {
			const currentLetter = match[i].toLowerCase();

			if (originalWord.indexOf(currentLetter) === -1) return false;

			originalWord = originalWord.replace(currentLetter, '');
		}

		return originalWord.length === 0;
	});

	return matches;
};

module.exports = Anagram;
