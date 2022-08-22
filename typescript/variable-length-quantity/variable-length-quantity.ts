export default class VLQ {
	static decode (input: Array<number>): Array<number> {
		const binaries = input.map(value => value.toString(2).padStart(8, '0'));
		const result: Array<Array<string>> = [];
		let index = 0;

		binaries.forEach(binary => {
			result[index] = [...result[index] ?? [], binary.slice(1)];

			if (binary[0] === '0') index++;
		});

		if (index === 0) throw new Error('Incomplete sequence');

		return result.map(n => Number.parseInt(n.join(''), 2));
	}

	static encode (input: Array<number>): Array<number> {
		return input.map(byte => {
			const result: Array<number> = [];

			if (!byte) result.unshift(0);

			let power = 1
			let val = 0
			let counter = 0

			while (byte) {
				val += power * (byte & 1);
				power *= 2;
				byte >>>= 1;
				counter++;

				if (counter % 7 === 0 || byte === 0) {
					result.unshift(counter > 7 ? 128 + val : val);

					power = 1;
					val = 0;
				}
			}

			return result;
		}).flat();
	}
}
