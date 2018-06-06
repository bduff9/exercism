const reverseString = function (str) {
	let reversed = '';

	for (let i = str.length; i--;) reversed += str[i];

	return reversed;
};

module.exports = reverseString;
