const Isogram = function (word) {
	const cleanedWord = word.replace(/[-\s]/g, '')
	const lettersSet = new Set(cleanedWord.toLowerCase());

	this.word = word;
	this.cleanedWord = cleanedWord;
	this.uniqueLetters = [...lettersSet].join('');
	this.isAnIsogram = lettersSet.size === cleanedWord.length;
};

Isogram.prototype.isIsogram = function () {
	return this.isAnIsogram;
};

module.exports = Isogram;
