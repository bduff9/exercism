const ETL = function () {};

ETL.prototype.transform = obj => {
	const newObj = {};

	Object.entries(obj).forEach(([pointStr, letterArr]) => {
		const pointValue = parseInt(pointStr, 10);

		letterArr.forEach(letter => newObj[letter.toLowerCase()] = pointValue);
	});

	return newObj;
};


module.exports = ETL;
