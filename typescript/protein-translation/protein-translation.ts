type Protein =
  | 'Methionine'
  | 'Phenylalanine'
  | 'Leucine'
  | 'Serine'
  | 'Tyrosine'
  | 'Cysteine'
  | 'Tryptophan';
type Proteins = Array<Protein>;

export default class ProteinTranslation {
  static readonly CODONS: Record<string, Protein | 'STOP'> = {
    AUG: 'Methionine',
    UUU: 'Phenylalanine',
    UUC: 'Phenylalanine',
    UUA: 'Leucine',
    UUG: 'Leucine',
    UCU: 'Serine',
    UCC: 'Serine',
    UCA: 'Serine',
    UCG: 'Serine',
    UAU: 'Tyrosine',
    UAC: 'Tyrosine',
    UGU: 'Cysteine',
    UGC: 'Cysteine',
    UGG: 'Tryptophan',
    UAA: 'STOP',
    UAG: 'STOP',
    UGA: 'STOP',
  };

  static proteins(rna: string): Proteins {
    const proteins: Proteins = [];

    while (rna.length >= 3) {
      const codon = rna.substring(0, 3);
      const protein = ProteinTranslation.CODONS[codon];

      if (protein === 'STOP') {
        break;
      }

      proteins.push(protein);
      rna = rna.substring(3);
    }

    return proteins;
  }
}
