export default class FoodChain {
	private static readonly ANIMALS = ['fly', 'spider', 'bird', 'cat', 'dog', 'goat', 'cow', 'horse'] as const;
	private static readonly EXTRA = ['', 'It wriggled and jiggled and tickled inside her.\n', 'How absurd to swallow a bird!\n', 'Imagine that, to swallow a cat!\n', 'What a hog, to swallow a dog!\n', 'Just opened her throat and swallowed a goat!\n', `I don't know how she swallowed a cow!\n`, `She's dead, of course!\n`];
	private static readonly END = `I don't know why she swallowed the fly. Perhaps she'll die.\n`;
	private static readonly START = (animal: typeof FoodChain.ANIMALS[number]): string =>
		`I know an old lady who swallowed a ${animal}.\n`;
	private static readonly MIDDLE = (swallowed: typeof FoodChain.ANIMALS[number], toCatch: string): string =>
		`She swallowed the ${swallowed} to catch the ${toCatch}.\n`;

	static verse(verse: number): string {
		const index = verse - 1;
		const animal = FoodChain.ANIMALS[index];
		let text = `${FoodChain.START(animal)}${FoodChain.EXTRA[index]}`;

		if (verse === 8) return text;

		for (let i = index; i > 0; i--) {
			const swallowed = FoodChain.ANIMALS[i];
			const toCatchAnimal = FoodChain.ANIMALS[i - 1];
			let toCatch: string = toCatchAnimal;

			if (i === 2) {
				const added = FoodChain.EXTRA[i - 1]
					.trim()
					.replace('It', ' that')
					.replace('.', '');

				toCatch = `${toCatchAnimal}${added}`;
			}

			text += FoodChain.MIDDLE(swallowed, toCatch);
		}

		return `${text}${FoodChain.END}`;
	}

	static verses(from: number, to: number): string {
		let text = '';

		for (let i = from; i <= to; i++) {
			text += `${FoodChain.verse(i)}\n`;
		}

		return `${text.trim()}\n`;
	}
}
