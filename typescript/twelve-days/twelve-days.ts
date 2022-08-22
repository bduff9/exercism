export default class TwelveDays {
  private static readonly VERSE_PARTS = [
    { day: 'first', gift: 'a Partridge in a Pear Tree' },
    { day: 'second', gift: 'two Turtle Doves' },
    { day: 'third', gift: 'three French Hens' },
    { day: 'fourth', gift: 'four Calling Birds' },
    { day: 'fifth', gift: 'five Gold Rings' },
    { day: 'sixth', gift: 'six Geese-a-Laying' },
    { day: 'seventh', gift: 'seven Swans-a-Swimming' },
    { day: 'eighth', gift: 'eight Maids-a-Milking' },
    { day: 'ninth', gift: 'nine Ladies Dancing' },
    { day: 'tenth', gift: 'ten Lords-a-Leaping' },
    { day: 'eleventh', gift: 'eleven Pipers Piping' },
    { day: 'twelfth', gift: 'twelve Drummers Drumming' },
  ];

  private static getVerse (verseNumber: number): string {
    const verseParts = this.VERSE_PARTS[verseNumber - 1];
    let verse = `On the ${verseParts.day} day of Christmas my true love gave to me: ${verseParts.gift}`;

    for (let i = verseNumber - 1; i--; ) {
      const { gift } = this.VERSE_PARTS[i];

      verse += `, ${i === 0 ? 'and ' : ''}${gift}`;
    }

    return `${verse}.\n`;
  }

  static recite (from: number, to: number): string {
    let allVerses = '';

    for (let currentVerse = from; currentVerse <= to; currentVerse++) {
      allVerses += this.getVerse(currentVerse);
    }

    return allVerses;
  }
}
