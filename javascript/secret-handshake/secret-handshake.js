var SecretHandshake = function (code) {
	if (typeof code !== 'number') throw new Error('Handshake must be a number');

	this.ALL_COMMANDS = ['wink', 'double blink', 'close your eyes', 'jump', 'reverse'];
	this.origCode = code;
	this.code = code.toString(2);
};

SecretHandshake.prototype.commands = function () {
	let commands = [];

	for (let i = this.code.length; i--;) {
		const value = this.code[i];
		const command = this.ALL_COMMANDS[this.code.length - 1 - i];

		if (value === '1') {
			if (command === 'reverse') {
				commands.reverse();
			} else {
				commands.push(command);
			}
		}
	}

	return commands;
};

module.exports = SecretHandshake;
