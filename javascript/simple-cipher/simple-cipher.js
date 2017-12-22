var Cipher = function (key) {
	this.chars = 'abcdefghijklmnopqrstuvwxyz';
	if (key === '') throw new Error('Bad key'); // Empty key
	if (key) {
		if (key.match(/\D/) === null) throw new Error('Bad key'); // Only numbers
		if (key.match(/[^A-Z]/) === null) throw new Error('Bad key'); // Only upper case letters
		this.key = key;
	} else {
		var newKey = '';
		var length = Math.floor((Math.random() * 900) + 100);
		for (var char = length; char--;) newKey += this.chars.charAt(Math.floor(Math.random() * this.chars.length));
		// Do we need to validate random key here?
		this.key = newKey;
	}
};

Cipher.prototype.encode = function (decoded) {
	var encoded = '';
	for (var i = 0; i < decoded.length; i++) {
		var currCharIndex = this.chars.indexOf(decoded[i].toLowerCase());
		var cipherIndex = i;
		while (cipherIndex >= this.key.length) cipherIndex -= this.key.length;
		var cipher = this.chars.indexOf(this.key[cipherIndex]);
		var newIndex = currCharIndex + cipher;
		if (newIndex >= this.chars.length) newIndex -= this.chars.length;
		encoded += this.chars[newIndex];
	}
	return encoded;
};

Cipher.prototype.decode = function (encoded) {
	var decoded = '';
	for (var i = 0; i < encoded.length; i++) {
		var currCharIndex = this.chars.indexOf(encoded[i].toLowerCase());
		var cipherIndex = i;
		while (cipherIndex >= this.key.length) cipherIndex -= this.key.length;
		var cipher = this.chars.indexOf(this.key[cipherIndex]);
		var newIndex = currCharIndex - cipher;
		if (newIndex < 0) newIndex += this.chars.length;
		decoded += this.chars[newIndex];
	}
	return decoded;
};

module.exports = Cipher;