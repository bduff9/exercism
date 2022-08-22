type Location = {
  column: number;
  row: number;
};

export const saddlePoints = (matrix: Array<Array<number>>): Array<Location> => {
  const rowMaxes = matrix.reduce((locations, row, i) => {
    const max = Math.max(...row);
    let column = -1;

    do {
      column = row.indexOf(max, column + 1);

      if (column > -1) {
        locations.push({
          column: column + 1,
          row: i + 1,
        });
      }
    } while (column > -1);

    return locations;
  }, [] as Array<Location>);


  return rowMaxes.filter(location => {
    const columnMin = Math.min(...matrix.map(row => row[location.column - 1]));

    return matrix[location.row - 1][location.column -1] === columnMin;
  });
};
