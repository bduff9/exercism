export default class CollatzConjecture {
  static steps(initial: number): number {
    if (initial <= 0) {
      throw new Error('Only positive numbers are allowed');
    }

    let current = initial;
    let steps = 0;

    while (current !== 1) {
      if (current % 2 === 0) {
        current /= 2;
      } else {
        current *= 3;
        current++;
      }

      steps++;
    }

    return steps;
  }
}
