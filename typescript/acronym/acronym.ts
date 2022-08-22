export default class Acronym {
  public static parse (phrase: string): string {
    return phrase.split(/[\s-]/g).map(word => {
      const capitals = word.match(/[a-z]([A-Z])/);
      let acronym = word.substring(0, 1);

      if (capitals) {
        for (let i = 1; i < capitals.length; i++) {
          acronym += capitals[i];
        }
      }

      return acronym;
    }).join('').toUpperCase();
  }
}
