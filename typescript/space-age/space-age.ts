export default class SpaceAge {
	private readonly SECONDS_IN_EARTH_YEAR = 31557600;
	public seconds: number;

	constructor(ageInSeconds: number) {
		this.seconds = ageInSeconds;
	}

	private formatNumber(number: number): number {
		return Math.round(number * 100) / 100;
	}

	private calculateAge(secondsInYear: number): number {
		return this.formatNumber(this.seconds / secondsInYear);
	}

	onMercury(): number {
		const YEAR_IN_SECONDS = this.SECONDS_IN_EARTH_YEAR * 0.2408467;

		return this.calculateAge(YEAR_IN_SECONDS);
	}

	onVenus(): number {
		const YEAR_IN_SECONDS = this.SECONDS_IN_EARTH_YEAR * 0.61519726;

		return this.calculateAge(YEAR_IN_SECONDS);
	}

	onEarth(): number {
		const YEAR_IN_SECONDS = this.SECONDS_IN_EARTH_YEAR * 1;

		return this.calculateAge(YEAR_IN_SECONDS);
	}

	onMars(): number {
		const YEAR_IN_SECONDS = this.SECONDS_IN_EARTH_YEAR * 1.8808158;

		return this.calculateAge(YEAR_IN_SECONDS);
	}

	onJupiter(): number {
		const YEAR_IN_SECONDS = this.SECONDS_IN_EARTH_YEAR * 11.862615;

		return this.calculateAge(YEAR_IN_SECONDS);
	}

	onSaturn(): number {
		const YEAR_IN_SECONDS = this.SECONDS_IN_EARTH_YEAR * 29.447498;

		return this.calculateAge(YEAR_IN_SECONDS);
	}

	onUranus(): number {
		const YEAR_IN_SECONDS = this.SECONDS_IN_EARTH_YEAR * 84.016846;

		return this.calculateAge(YEAR_IN_SECONDS);
	}

	onNeptune(): number {
		const YEAR_IN_SECONDS = this.SECONDS_IN_EARTH_YEAR * 164.79132;

		return this.calculateAge(YEAR_IN_SECONDS);
	}
}
