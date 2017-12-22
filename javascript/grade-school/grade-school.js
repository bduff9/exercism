var School = function () {
	this.fullRoster = {};
};

School.prototype.add = function (name, grade) {
	if (!this.fullRoster[grade]) this.fullRoster[grade] = [];

	this.fullRoster[grade].push(name);

	this.fullRoster[grade].sort();
};

School.prototype.roster = function () {
	return this.fullRoster;
};

School.prototype.grade = function (grade) {
	const gradeForRoster = this.fullRoster[grade];

	if (!gradeForRoster) return [];

	return gradeForRoster;
};

module.exports = School;
