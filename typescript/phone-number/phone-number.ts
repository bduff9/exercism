export default class PhoneNumber {
	constructor(private unformatted: string) {}

	number (): string | undefined {
		if (this.unformatted.match(/[a-zA-Z]/g)) return undefined;

		const stripped =  this.unformatted.replace(/\D/g, '');
		const formatted = stripped.match(/^1?(\d{10,10})$/);

		if (!formatted) return undefined;

		return formatted[1];
	}
}
