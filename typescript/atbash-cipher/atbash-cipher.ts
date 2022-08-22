export default class AtbashCipher {
	private PLAIN  = 'abcdefghijklmnopqrstuvwxyz';
	private CIPHER = 'zyxwvutsrqponmlkjihgfedcba';
	private GROUPING_LENGTH = 5;

	decode(code: string): string {
		const decoded = code.replace(/[^\w]/g, '').split('').map(letter => {
			const index = this.CIPHER.indexOf(letter);

			if (index === -1) return letter;

			return this.PLAIN[index];
		});

		return decoded.join('');
	}

	encode(secret: string): string {
		const code = secret.toLowerCase().replace(/[^\w]/g, '').split('').map(letter => {
			const index = this.PLAIN.indexOf(letter);

			if (index === -1) return letter;

			return this.CIPHER[index];
		});

		return code.reduce((encoded, letter, index) => {
			encoded += letter;

			if ((index + 1) % this.GROUPING_LENGTH === 0) encoded += ' ';

			return encoded;
		}, '').trim();
	}
}
