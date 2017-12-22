var Gigasecond = function (birthDate) {
	this.birth = birthDate;
	this.gigaSeconds = 1000000000;
};

Gigasecond.prototype.date = function () {
	var gigaDate = new Date(this.birth.getTime());
	gigaDate.setSeconds(gigaDate.getSeconds() + this.gigaSeconds);
	return gigaDate;
};

module.exports = Gigasecond;