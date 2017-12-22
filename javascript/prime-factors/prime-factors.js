var primeFactors = {
	begin: 2,
	for: function (val) {
		let begin = this.begin;
		let results = [];

		while (begin <= val) {
			if (val % begin === 0) {
				results.push(begin);
				val = val / begin;
			} else {
				begin++;
			}
		}

		return results;
	}
};

module.exports = primeFactors;