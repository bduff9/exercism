const line = (want: string, lost: string): string =>
	`For want of a ${want} the ${lost} was lost.\n`;

const ending = (object: string): string =>
	`And all for the want of a ${object}.`;

const Proverb = (...input: Array<string>): string => {
	let proverb = '';

	for (let i = 0; i < input.length - 1; i++) {
		proverb += line(input[i], input[i + 1]);
	}

	return `${proverb}${ending(input[0])}`;
};

export default Proverb;
