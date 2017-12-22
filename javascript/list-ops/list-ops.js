var List = function (initialValues) {
	this.values = initialValues || [];
};

List.prototype.append = function (list) {
	const length = list.values.length;

	for (let i = 0; i < length; i++) {
		const item = list.values[i];

		this.values.push(item);
	}

	return this;
};

List.prototype.concat = function (list) {
	const length = list.values.length;

	for (let i = 0; i < length; i++) {
		const item = list.values[i];

		this.values.push(item);
	}

	return this;
};

List.prototype.filter = function (func) {
	const length = this.values.length;
	let results = new List();

	for (let i = 0; i < length; i++) {
		const item = this.values[i];

		if (func(item)) results.values.push(item);
	}

	return results;
};

List.prototype.length = function () {
	return this.values.length;
};

List.prototype.map = function (func) {
	const length = this.values.length;
	let results = new List();

	for (let i = 0; i < length; i++) {
		const item = this.values[i];

		results.values.push(func(item));
	}

	return results;
};
List.prototype.foldl = function (func, starting) {
	const length = this.values.length;
	let result = starting;

	for (let i = 0; i < length; i++) {
		const item = this.values[i];

		result = func(item, result);
	}

	return result;
};

List.prototype.foldr = function (func, starting) {
	const length = this.values.length;
	let result = starting;

	for (let i = length; i--;) {
		const item = this.values[i];

		result = func(item, result);
	}

	return result;
};

List.prototype.reverse = function () {
	const length = this.values.length;
	let results = [];

	for (let i = length; i--;) {
		const item = this.values[i];

		results.push(item);
	}

	for (let i = 0; i < length; i++) {
		this.values[i] = results[i];
	}

	return this;
};

module.exports = List;
