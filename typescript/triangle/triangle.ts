type TriangleType = 'equilateral' | 'isosceles' | 'scalene';

export default class Triangle {
  private sides: [number, number, number];

  constructor(side1: number, side2: number, side3: number) {
    this.sides = [side1, side2, side3];
  }

  kind(): TriangleType {
    const results = this.sides.reduce((result, side, i, allSides) => {
      if (side <= 0) throw new Error('Invalid dimension found');

      const first2SidesSum = allSides[(i + 1) % allSides.length] + side;
      const finalSide = allSides[(i + 2) % allSides.length];
      const count = result[side] ?? 0;

      if (first2SidesSum < finalSide) {
        throw new Error('Invalid dimensions passed');
      }

      if (first2SidesSum === finalSide) {
        //TODO: degenerate triangle found
      }

      result[side] = count + 1;

      return result;
    }, {} as Record<number, number>);

    const max = Math.max(...Object.values(results));

    switch (max) {
      case 3: return 'equilateral';
      case 2: return 'isosceles';
      case 1: return 'scalene';
      default: throw new Error('Invalid number of sides passed');
    }
  }
}
