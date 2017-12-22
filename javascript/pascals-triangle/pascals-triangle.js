function calculateRow(rowNumber, previousRow = []) {
	const row = [];
	let leftIndex, leftNumber, rightNumber;
	
	if (rowNumber === 1) return [1];

	for (let rightIndex = 0; rightIndex < rowNumber; rightIndex++) {
		leftIndex = rightIndex - 1;

		if (leftIndex < 0) {
			leftNumber = 0;
		} else {
			leftNumber = previousRow[leftIndex];
		}

		if (rightIndex >= previousRow.length) {
			rightNumber = 0;
		} else {
			rightNumber = previousRow[rightIndex];
		}

		row.push(leftNumber + rightNumber);
	}

	return row;
}

var Triangle = function (rowCount) {
	const rows = [];
	let previousRow = null;
	let row = 1;

	while (row <= rowCount) {
		previousRow = calculateRow(row, previousRow);
		
		rows.push(previousRow);

		row++;
	}

	this.rows = rows;
	this.lastRow = rows[rows.length - 1];
};

module.exports = Triangle;