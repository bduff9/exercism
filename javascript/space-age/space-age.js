var SpaceAge = function (seconds) {
	this.seconds = seconds;
};

SpaceAge.prototype.round = function(seconds) {
	return (Math.round(seconds * 100) / 100);
};

SpaceAge.prototype.getAge = function () {
	const EARTH_SECONDS = 31557600;
	return this.seconds / EARTH_SECONDS;
};

SpaceAge.prototype.onEarth = function () {
	const EARTH_TO_EARTH_RATIO = 1;
	const age = this.getAge();
	return this.round(age / EARTH_TO_EARTH_RATIO);
};


SpaceAge.prototype.onMercury = function () {
	const EARTH_TO_MERCURY_RATIO = 0.2408467;
	const age = this.getAge();
	return this.round(age / EARTH_TO_MERCURY_RATIO);
};


SpaceAge.prototype.onVenus = function () {
	const EARTH_TO_VENUS_RATIO = 0.61519726;
	const age = this.getAge();
	return this.round(age / EARTH_TO_VENUS_RATIO);
};


SpaceAge.prototype.onMars = function () {
	const EARTH_TO_MARS_RATIO = 1.8808158;
	const age = this.getAge();
	return this.round(age / EARTH_TO_MARS_RATIO);
};


SpaceAge.prototype.onJupiter = function () {
	const EARTH_TO_JUPITER_RATIO = 11.862615;
	const age = this.getAge();
	return this.round(age / EARTH_TO_JUPITER_RATIO);
};


SpaceAge.prototype.onSaturn = function () {
	const EARTH_TO_SATURN_RATIO = 29.447498;
	const age = this.getAge();
	return this.round(age / EARTH_TO_SATURN_RATIO);
};


SpaceAge.prototype.onUranus = function () {
	const EARTH_TO_URANUS_RATIO = 84.016846;
	const age = this.getAge();
	return this.round(age / EARTH_TO_URANUS_RATIO);
};


SpaceAge.prototype.onNeptune = function () {
	const EARTH_TO_NEPTUNE_RATIO = 164.79132;
	const age = this.getAge();
	return this.round(age / EARTH_TO_NEPTUNE_RATIO);
};

module.exports = SpaceAge;