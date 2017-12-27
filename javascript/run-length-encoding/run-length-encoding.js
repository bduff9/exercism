const RLE = (function () {
	const encode = function (decodedStr) {
		const stringLength = decodedStr.length;
		let encodedStr = '';
		let lastLetter = '';
		let letterRepeat = 0;

		for (let i = 0; i < stringLength; i++) {
			const currentLetter = decodedStr[i];

			if (currentLetter !== lastLetter) {
				if (letterRepeat > 1) encodedStr += letterRepeat;
				encodedStr += lastLetter;
				lastLetter = currentLetter;
				letterRepeat = 1;
			} else {
				letterRepeat++;
			}
		}

		if (letterRepeat > 1) encodedStr += letterRepeat;
		encodedStr += lastLetter;

		return encodedStr;
	};

	const decode = function (encodedStr) {
		const stringLength = encodedStr.length;
		const tokens = encodedStr.match(/\d*[a-z\s]/gi);
		const tokensLength = (tokens ? tokens.length : 0);
		let decodedStr = '';

		for (let i = 0; i < tokensLength; i++) {
			const currentToken = tokens[i];
			const lastCharPosition = currentToken.length - 1;
			const letter = currentToken.substring(lastCharPosition);
			const repeatStr = currentToken.substring(0, lastCharPosition);
			let repeat = (repeatStr ? parseInt(repeatStr, 10) : 1);

			for (let j = repeat; j--;) decodedStr += letter;
		}

		return decodedStr;
	};

	return {
		decode,
		encode
	};
}());

module.exports = RLE;
