type Nucleotides = {
  A: number;
  C: number;
  G: number;
  T: number;
};
type Nucleotide = keyof Nucleotides;

export default class NucleotideCount {
  static nucleotideCounts(dna: string): Nucleotides {
    const nucleotides: Nucleotides = {
      A: 0,
      C: 0,
      G: 0,
      T: 0,
    };

    if (dna.match(/([^ACTG])/)) throw new Error('Invalid nucleotide in strand');

    dna.split('').forEach(nucleotide => nucleotides[nucleotide as Nucleotide]++);

    return nucleotides;
  }
}
