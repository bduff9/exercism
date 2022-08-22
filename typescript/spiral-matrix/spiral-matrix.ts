const DIRECTIONS = {
  RIGHT: 0,
  DOWN: 1,
  LEFT: 2,
  UP: 3,
} as const;

type Direction = keyof typeof DIRECTIONS;
type DirectionValue = typeof DIRECTIONS[Direction];
type Cell = [number, number];

const getNextCell = (size: number, cell: Cell, direction: DirectionValue): Cell | null => {
  const [x, y] = cell;
  const MIN = 0;
  const MAX = size - 1;
  let newCell: Cell | null = null;

  switch (direction) {
    case DIRECTIONS.RIGHT:
      newCell = [x + 1, y];
      break;
    case DIRECTIONS.DOWN:
      newCell = [x, y + 1];
      break;
    case DIRECTIONS.LEFT:
      newCell = [x - 1, y];
      break;
    case DIRECTIONS.UP:
      newCell = [x, y - 1];
      break;
    default:
      throw new Error(`Unknown direction: ${direction}`);
  }

  if (newCell[0] < MIN || newCell[0] > MAX) return null;

  if (newCell[1] < MIN || newCell[1] > MAX) return null;

  return newCell;
};

const isFilled = (spiral: Array<Array<number>>, newCell: Cell): boolean => spiral[newCell[1]][newCell[0]] !== undefined;

const changeDirection = (direction: DirectionValue): DirectionValue => {
  if (direction === DIRECTIONS.UP) return DIRECTIONS.RIGHT;

  return direction + 1 as DirectionValue;
};

export const ofSize = (size: number): Array<Array<number>> => {
  const spiral: Array<Array<number>> = Array.from({ length: size }).map(() => Array.from({ length: size }));
  const end = size ** 2;
  let direction: DirectionValue = DIRECTIONS.RIGHT;
  let currentValue = 1;
  let currentCell: Cell = [0, 0];

  while (currentValue <= end) {
    const newCell = currentValue === 1 ? currentCell : getNextCell(spiral.length, currentCell, direction);

    if (newCell === null || isFilled(spiral, newCell)) {
      direction = changeDirection(direction);
    } else {
      spiral[newCell[1]][newCell[0]] = currentValue++;
      currentCell = newCell;
    }
  }

  return spiral;
}
