const UsedRobotNames = [];

const Robot = function () {
	this.uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	this.digits = '1234567890';

	this.generateName = function () {
		let newName;

		do {
			newName = '';

			newName += this.getRandom(this.uppercase);
			newName += this.getRandom(this.uppercase);

			newName += this.getRandom(this.digits);
			newName += this.getRandom(this.digits);
			newName += this.getRandom(this.digits);
		} while (UsedRobotNames.indexOf(newName) > -1);

		UsedRobotNames.push(newName);

		return newName;
	};

	this.getRandom = function (bank) {
		const max = bank.length;
		const random = Math.floor(Math.random() * max);

		return bank[random];
	};

	this.name = this.generateName();
};

Robot.prototype.reset = function () {
	this.name = this.generateName();
};

module.exports = Robot;
