export default class Raindrops {
	convert(num: number): string {
		let speak = '';

		if (num % 3 === 0) speak += 'Pling';
		if (num % 5 === 0) speak += 'Plang';
		if (num % 7 === 0) speak += 'Plong';
		if (speak.length === 0) speak += num;

		return speak;
	}
}
