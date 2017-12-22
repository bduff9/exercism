//
// This is only a SKELETON file for the "Leap" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Year = function (input) {
	this.year = input;
};

Year.prototype.isLeap = function () {
	var isDivBy4 = this.year % 4 === 0,
		isDivBy100 = this.year % 100 === 0,
		isDivBy400 = this.year % 400 === 0;
	if (!isDivBy4) return false;
	if (!isDivBy100) return true;
	if (isDivBy400) return true;
	return false;
};

module.exports = Year;
