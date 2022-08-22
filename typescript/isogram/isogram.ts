export default class Isogram {
  static isIsogram(input: string): boolean {
    const filtered = input.replace(/[^\w]/g, '').toLowerCase().split('');
    const unique = new Set(filtered);

    return unique.size === filtered.length;
  }
}
