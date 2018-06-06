const PhoneNumber = function (phoneString) {
	let phoneNumber;

	phoneNumber = phoneString.replace(/[\(\)+\s-\.]/g, '').replace(/^1(\d{10})$/, '$1');

	if (!phoneNumber.match(/^[2-9]\d{2}[2-9]\d{6}$/)) phoneNumber = null;

	this.phoneString = phoneString;
	this.phoneNumber = phoneNumber;
}

PhoneNumber.prototype.number = function () {
	return this.phoneNumber;
};

module.exports = PhoneNumber;
