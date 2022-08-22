export default class Words {
	count(text: string): Map<string, number> {
		const result = new Map<string, number>();
		/**
		 * NOTE: String.split is much faster than String.match in benchmark testing, such as this one:
		 * https://measurethat.net/Benchmarks/Show/7822/0/strmatch-vs-strsplit
		 */
		const words = text.trim().toLowerCase().split(/\s+/);

		words.forEach(word => {
			let number = result.get(word) ?? 0;

			result.set(word, ++number);
		});

		return result;
	}
}
