var Binary = function (binaryStr) {
	this.binaryStr = binaryStr;
	this.valid = !binaryStr.match(/[^01]/g);
};

Binary.prototype.toDecimal = function () {
	const binaryArr = this.binaryStr.split('');
	const binaryLength = binaryArr.length;
	const convert = binaryLength - 1;
	let decimalVal = 0;
	if (!this.valid) return decimalVal;
	for (let i = binaryLength; i--;) {
		let digit = parseInt(binaryArr[i], 10);
		decimalVal += (digit * Math.pow(2, (convert - i)));
	}
	return decimalVal;
};

module.exports = Binary;
