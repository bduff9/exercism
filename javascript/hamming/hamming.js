const Hamming = function () {
	
};

Hamming.prototype.compute = function (strand1, strand2) {
	const strandLength = strand1.length;
	let diff = 0;

	if (strandLength !== strand2.length) throw new Error('DNA strands must be of equal length.');

	for (let i = strandLength; i--;) {
		const base1 = strand1[i];
		const base2 = strand2[i];
		
		if (base1 !== base2) diff++;
	}

	return diff;
};

module.exports = Hamming;
