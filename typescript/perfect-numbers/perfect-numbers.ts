type TPerfectNumber = 'abundant' | 'deficient' | 'perfect';

export default class PerfectNumbers {
	static classify(value: number): TPerfectNumber {
		if (value < 1) throw new Error('Classification is only possible for natural numbers.');

		const sum = PerfectNumbers.getAliquotSum(value);

		if (sum === value) return 'perfect';

		if (sum > value) return 'abundant';

		return 'deficient';
	}

	static getAliquotSum(value: number): number {
		return PerfectNumbers.getFactors(value).reduce((sum, value) => sum + value, 0);
	}

	static getFactors(value: number): Array<number> {
		const factors: Array<number> = [];
		const start = Math.floor(value / 2) + 1;

		for (let i = start; i--;) {
			if (value % i === 0) factors.push(i);
		}

		return factors;
	}
}
