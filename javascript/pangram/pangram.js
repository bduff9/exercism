var Pangram = function (str) {
	this.str = str.toLowerCase().replace(/[^a-z]/g, '');
};

Pangram.prototype.isPangram = function () {
	var letterArr = this.str.split('');
	var letterSet = new Set(letterArr);

	return letterSet.size === 26;
};

module.exports = Pangram;