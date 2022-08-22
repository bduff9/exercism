class Matrix {
  private matrix: string;
  public rows: number[][];
  public columns: number[][];

  constructor(matrix: string) {
    this.matrix = matrix;

    const [rows, columns] = this.getRowsAndColumns(matrix);
    this.columns = columns;
    this.rows = rows;
  }

  getRowsAndColumns(matrix: string): [number[][], number[][]] {
    const rowStrings = matrix.split('\n');
    const numRows = rowStrings.length;
    const rows: number[][] = [];
    const columns: number[][] = [];

    for (let rowNum = 0; rowNum < numRows; rowNum++) {
      const row = rowStrings[rowNum];
      const rowNumbers = row.split(/\s/g).map((numStr, colNum): number => {
        const number = parseInt(numStr, 10);

        if (!columns[colNum]) columns[colNum] = [];

        columns[colNum][rowNum] = number;

        return number;
      });

      rows[rowNum] = rowNumbers;
    }

    return [rows, columns];
  }
}

export default Matrix
