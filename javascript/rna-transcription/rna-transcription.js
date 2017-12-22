var DnaTranscriber = function () {
	this.DNAArr = ['G', 'C', 'T', 'A'];
	this.RNAArr = ['C', 'G', 'A', 'U'];
};

DnaTranscriber.prototype.toRna = function (dna) {
	var rna = '';

	for (var i = 0; i < dna.length; i++) {
		var dnaPiece = dna[i];
		var index = this.DNAArr.indexOf(dnaPiece);

		if (index === -1) throw new Error('Invalid input');

		rna += this.RNAArr[index];
	}

	return rna;
};

module.exports = DnaTranscriber;