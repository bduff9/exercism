const ALLERGIES = {
	eggs: 1,
	peanuts: 2,
	shellfish: 4,
	strawberries: 8,
	tomatoes: 16,
	chocolate: 32,
	pollen: 64,
	cats: 128,
} as const;

export default class Allergies {
	private myAllergies: Array<keyof typeof ALLERGIES>;

	constructor(private score: number) {
		this.myAllergies = Object.entries(ALLERGIES).reduce((myAllergies, [allergy, value]) => {
			if ((value & score) !== 0) {
				myAllergies.push(allergy as keyof typeof ALLERGIES);
			}

			return myAllergies;
		}, [] as Array<keyof typeof ALLERGIES>);
	}

	allergicTo(allergy: keyof typeof ALLERGIES): boolean {
		return this.myAllergies.includes(allergy);
	}

	list(): Array<keyof typeof ALLERGIES> {
		return this.myAllergies;
	}
}
