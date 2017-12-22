var Bob = function () {};

Bob.prototype.hey = function (rawMessage) {
	var message = (rawMessage ? rawMessage.trim() : '');
	var lowerCaseChars = message.match(/[a-z]/g);
	var upperCaseChars = message.match(/[A-Z]/g);
	var isQuestion = (message.indexOf('?') === (message.length - 1));

	if (message === '') return 'Fine. Be that way!';
	if (!lowerCaseChars && upperCaseChars) return 'Whoa, chill out!';
	if (isQuestion) return 'Sure.';

	return 'Whatever.';
};

module.exports = Bob;