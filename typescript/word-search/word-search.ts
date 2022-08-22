type LetterLocation = [number, number];
type FirstTwoLetters = [LetterLocation, LetterLocation];
type WordLocation = { end: LetterLocation; start: LetterLocation };
type GetWordResult = [string, LetterLocation, LetterLocation];
type FoundWords = Record<string, WordLocation | undefined>;

export default class WordSearch {
  constructor (private grid: Array<string>) {};

  private findLetterLocations(letter: string): Array<LetterLocation> {
    const foundLocs = this.grid.reduce((found, row, x): Array<LetterLocation> => {
      for (let y = 0; y < row.length; y++) {
        if (row[y] === letter) found.push([x, y]);
      }

      return found;
    }, [] as Array<LetterLocation>);

    return foundLocs;
  }

  private getDistance(firstLetterLoc: LetterLocation, secondLetterLoc: LetterLocation): [number, number] {
    const xDirection = secondLetterLoc[0] - firstLetterLoc[0];
    const yDirection = secondLetterLoc[1] - firstLetterLoc[1];

    return [xDirection, yDirection];
  }

  private getAbsoluteDistance(firstLetterLoc: LetterLocation, secondLetterLoc: LetterLocation): [number, number] {
    const [xDirection, yDirection] = this.getDistance(firstLetterLoc, secondLetterLoc);

    return [Math.abs(xDirection), Math.abs(yDirection)];
  }

  private isOneSpaceAway(firstLetterLoc: LetterLocation, secondLetterLoc: LetterLocation): boolean {
    const [xDistance, yDistance] = this.getAbsoluteDistance(firstLetterLoc, secondLetterLoc);

    return xDistance < 2 && yDistance < 2;
  }

  private findPossibilities(firstLetterLocs: Array<LetterLocation>, secondLetterLocs: Array<LetterLocation>): Array<FirstTwoLetters> {
    const possibilities: Array<FirstTwoLetters> = [];

    for (const firstLetterLoc of firstLetterLocs) {
      for (const secondLetterLoc of secondLetterLocs) {
        if (this.isOneSpaceAway(firstLetterLoc, secondLetterLoc)) {
          possibilities.push([firstLetterLoc, secondLetterLoc]);
        }
      }
    }

    return possibilities;
  }

  private fromIndex(loc: LetterLocation): LetterLocation {
    return [loc[0] + 1, loc[1] + 1];
  }

  private getLetterAt(location: LetterLocation): string {
    const letter = this.grid[location[0]]?.[location[1]];

    return letter ?? ' ';
  }

  private getWord([firstLetterLoc, secondLetterLoc]: FirstTwoLetters, wordLength: number): GetWordResult {
    const [xDirection, yDirection] = this.getDistance(firstLetterLoc, secondLetterLoc);
    const start = firstLetterLoc;
    let word = this.getLetterAt(start);
    let current: LetterLocation = start;

    while (word.length < wordLength) {
      current = [current[0] + xDirection, current[1] + yDirection];
      word += this.getLetterAt(current);
    }

    return [word, start, current];
  }

  public find(words: string[]): FoundWords {
    return words.reduce((found, word) => {
      const firstLetterLocs = this.findLetterLocations(word[0]);
      const secondLetterLocs = this.findLetterLocations(word[1]);
      const matches = this.findPossibilities(firstLetterLocs, secondLetterLocs);
      let foundWord: WordLocation | undefined = undefined;

      for (const match of matches) {
        const [possibility, start, end] = this.getWord(match, word.length);

        if (possibility === word) {
          foundWord = {
            end: this.fromIndex(end),
            start: this.fromIndex(start),
          };

          break;
        }
      }

      found[word] = foundWord;

      return found;
    }, {} as FoundWords)
  }
}
