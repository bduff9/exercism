export default class SimpleCipher {
  private LETTERS = 'abcdefghijklmnopqrstuvwxyz';
  private KEY_LENGTH = 100;
  public key: string;

  constructor(key?: string) {
    this.key = key || this.getKey();
  }

  decode(code: string): string {
    let key = this.key;

    while (key.length < code.length) key += key;

    return code.split('').reduce((text, letter, i) => {
      const index1 = this.LETTERS.indexOf(letter);
      const index2 = this.LETTERS.indexOf(key[i]);
      let newIndex = index1 - index2;

      while (newIndex < 0) {
        newIndex += this.LETTERS.length;
      }

      if (newIndex >= this.LETTERS.length) {
        newIndex = newIndex % this.LETTERS.length;
      }

      text += this.LETTERS[newIndex];

      return text;
    }, '');
  }

  encode(text: string): string {
    let key = this.key;

    while (key.length < text.length) key += key;

    return text.split('').reduce((code, letter, i) => {
      const index1 = this.LETTERS.indexOf(letter);
      const index2 = this.LETTERS.indexOf(key[i]);
      let newIndex = index1 + index2;

      while (newIndex < 0) {
        newIndex += this.LETTERS.length;
      }

      if (newIndex >= this.LETTERS.length) {
        newIndex = newIndex % this.LETTERS.length;
      }

      code += this.LETTERS[newIndex];

      return code;
    }, '');
  }

  getKey(): string {
    let key = '';

    while (key.length < this.KEY_LENGTH) {
      key += this.LETTERS[Math.floor(Math.random() * this.LETTERS.length)];
    }

    return key;
  }
}
