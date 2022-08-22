export default class Clock {
	private hours: number;
	private minutes: number;

	constructor(hours: number, minutes = 0) {
		const [h, m] = this.formatTimeReceived(hours, minutes);

		this.hours = h;
		this.minutes = m;
	}

	equals(clock: Clock): boolean {
		return this.toString() === clock.toString();
	}

	formatTime(value: number): string {
		return `${value}`.padStart(2, '0');
	}

	formatTimeReceived(hours: number, minutes: number): [number, number] {
		const hoursInMins = Math.floor(minutes / 60);
		let hr = (hours + hoursInMins) % 24;
		let min = minutes % 60;

		while (hr < 0) hr += 24;
		while (min < 0) min += 60;

		return [hr, min];
	}

	minus(minutes: number): Clock {
		const hrs = Math.floor(minutes / 60);
		const mins = minutes % 60;
		const [h, m] = this.formatTimeReceived(this.hours - hrs, this.minutes - mins);

		this.hours = h;
		this.minutes = m;

		return this;
	}

	plus(minutes: number): Clock {
		const hrs = Math.floor(minutes / 60);
		const mins = minutes % 60;
		const [h, m] = this.formatTimeReceived(this.hours + hrs, this.minutes + mins);

		this.hours = h;
		this.minutes = m;

		return this;
	}

	toString(): string {
		const hour = this.formatTime(this.hours);
		const minute = this.formatTime(this.minutes);

		return `${hour}:${minute}`;
	}
}
