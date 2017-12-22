var Matrix = function (arrayStr) {
	const lines = arrayStr.split('\n');
	const rows = lines.map(line => line.split(' ').map(num => parseInt(num, 10)));
	let columns = [];

	for (let i = 0; i < rows.length; i++) {
		for (let j = 0; j < rows[i].length; j++) {
			if (!columns[j]) columns[j] = [];
			columns[j][i] = rows[i][j];
		}
	}

	this.rows = rows;
	this.columns = columns;
};

module.exports = Matrix;
