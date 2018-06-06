const FoodChain = function () {
	const spidersAction = 'wriggled and jiggled and tickled inside her';
	this.animals = [
		'ERROR',
		'fly',
		'spider',
		'bird',
		'cat',
		'dog',
		'goat',
		'cow',
		'horse'
	];
	this.animalActions = [
		'ERROR',
		'',
		`It ${spidersAction}.\n`,
		'How absurd to swallow a bird!\n',
		'Imagine that, to swallow a cat!\n',
		'What a hog, to swallow a dog!\n',
		'Just opened her throat and swallowed a goat!\n',
		'I don\'t know how she swallowed a cow!\n',
		'She\'s dead, of course!\n'
	];
	this.animals2 = [...this.animals];
	this.animals2[2] = `spider that ${spidersAction}`;
};

FoodChain.prototype.verse = function (which) {
	const animal = this.animals[which];
	let verse;

	if (which < 1 || which >= this.animals.length) throw new Error('Please enter a valid verse number');

	verse = `I know an old lady who swallowed a ${animal}.\n`;
	
	if (which === this.animals.length - 1) return verse + this.animalActions[which];

	verse += this.animalActions[which];

	while (which > 1) verse += `She swallowed the ${this.animals[which]} to catch the ${this.animals2[--which]}.\n`;

	verse += 'I don\'t know why she swallowed the fly. Perhaps she\'ll die.\n';

	return verse;
};

FoodChain.prototype.verses = function (start, end) {
	let verses = '';

	for (let i = start; i <= end; i++) {
		verses += this.verse(i) + '\n';
	}

	return verses;
};

module.exports = FoodChain;
