var ArgumentError = function () {
	return new Error();
};

var WordProblem = function (question) {
	this.question = question;

	this.INVALID_QUESTION_ERR = new ArgumentError();

	this.calculate = function (tokens) {
		if (tokens.length < 3) throw this.INVALID_QUESTION_ERR;

		const number1 = tokens[0];
		const action = tokens[1];
		const number2 = tokens[2];
		let result;

		switch(action) {
			case '+':
				result = number1 + number2;
				break;
			case '-':
				result = number1 - number2;
				break;
			case '*':
				result = number1 * number2;
				break;
			case '/':
				result = number1 / number2;
				break;
			default:
				throw this.INVALID_QUESTION_ERR;
		}

		tokens[0] = result;
		tokens.splice(1, 2);
	};
};


WordProblem.prototype.answer = function () {
	let question, tokens;

	if (this.question.indexOf('What is ') !== 0) throw this.INVALID_QUESTION_ERR;
	if (this.question.indexOf('?') !== (this.question.length -1)) throw this.INVALID_QUESTION_ERR;

	question = this.question.replace(/What is /g, '').replace(/\?/g, '').replace(/ by/g, '');

	tokens = question.split(' ');
	tokens = tokens.map(token => {
		if (token.match(/-*\d+/)) return parseInt(token, 10);
		if (token.match(/plus/)) return '+';
		if (token.match(/minus/)) return '-';
		if (token.match(/multiplied/)) return '*';
		if (token.match(/divided/)) return '/';
		throw this.INVALID_QUESTION_ERR;
	});

	while (tokens.length > 1) this.calculate(tokens);

	return tokens[0];
};

module.exports = {
	WordProblem,
	ArgumentError
};
