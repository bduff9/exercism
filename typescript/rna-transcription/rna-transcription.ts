const DNA_NUCLEOTIDES = <const>['A', 'C', 'G', 'T'];
const RNA_NUCLEOTIDES = <const>['U', 'G', 'C', 'A'];

type DnaNucleotide = typeof DNA_NUCLEOTIDES[number];
type RnaNucleotide = typeof RNA_NUCLEOTIDES[number];

class Transcriptor {
  nucleotideConverter(nucleotide: DnaNucleotide): RnaNucleotide {
    const location = DNA_NUCLEOTIDES.indexOf(nucleotide);

    if (location === -1) throw new Error('Invalid input DNA.');

    return RNA_NUCLEOTIDES[location];
  }

  toRna(dna: string): string {
    return dna
      .split('')
      .map((nucleotide) => this.nucleotideConverter(nucleotide as DnaNucleotide))
      .join('');
  }
}

export default Transcriptor;
