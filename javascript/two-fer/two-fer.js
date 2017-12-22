var TwoFer = function () {};

TwoFer.prototype.twoFer = function (who) {
	const WHO_PHRASE = `One for ${who}, one for me.`,
			DEFAULT_PHRASE = 'One for you, one for me.';
	if (who) return WHO_PHRASE;

	return DEFAULT_PHRASE;
};

module.exports = TwoFer;
