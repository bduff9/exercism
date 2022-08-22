export default class Hamming {
	compute(strand1: string, strand2: string): number {
		if (strand1.length !== strand2.length) throw new Error('DNA strands must be of equal length.');

		const diffs = strand1.split('').reduce((diffs, letter, i) => {
			if (letter !== strand2[i]) diffs++;

			return diffs;
		}, 0);

		return diffs;
	}
}
