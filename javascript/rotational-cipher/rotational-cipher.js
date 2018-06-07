const RotationalCipher = function () {
	this.shiftLetter = (letter, shift) => {
		const alphabet = 'abcdefghijklmnopqrstuvwxyz';
		const index = alphabet.indexOf(letter.toLowerCase());
		const isUpper = letter.toLowerCase() !== letter;
		let newIndex = index + shift;
		let newLetter;

		if (index === -1) return letter;

		if (newIndex >= alphabet.length) newIndex = newIndex - alphabet.length;

		newLetter = alphabet[newIndex];

		if (isUpper) return newLetter.toUpperCase();

		return newLetter;
	};
};

RotationalCipher.prototype.rotate = function (phrase, number) {
	const shift = number % 26;
	const shiftLetter = this.shiftLetter;

	if (shift === 0) return phrase;

	return phrase.split('').map(letter => this.shiftLetter(letter, shift)).join('');
};

module.exports = RotationalCipher;
