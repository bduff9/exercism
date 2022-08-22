export default class HandShake {
	private readonly ACTIONS = ['wink', 'double blink', 'close your eyes', 'jump', 'REVERSE'];

	constructor(private code: number) {}

	commands(): string[] {
		const commands: string[] = [];
		let remaining = this.code;
		let isReversed = false;

		for (let i = this.ACTIONS.length; i--;) {
			const value = Math.pow(2, i);
			const action = this.ACTIONS[i];

			if (remaining >= value) {
				if (action === 'REVERSE') {
					isReversed = true;
				} else {
					commands.push(action);
				}

				remaining -= value;
			}
		}

		if (remaining !== 0) {
			throw new Error(`Invalid number passed, remaining value: ${remaining}`);
		}

		return isReversed ? commands : commands.reverse();
	}
}
