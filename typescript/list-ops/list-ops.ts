export default class List<T> {
	public values: Array<T>;

	constructor(values?: Array<T>) {
		this.values = values?.slice() || [];
	}

	append(listToAppend: List<T>): List<T> {
		this.values = this.values.concat(listToAppend.values);

		return this;
	}

	concat(listToConcat: List<List<T>>): List<T> {
		const listLength = listToConcat.length();
		let copy = this.values;

		for (let i = 0; i < listLength; i++) {
			copy = copy.concat(listToConcat.values[i].values);
		}

		this.values = copy;

		return this;
	}

	filter(cb: (value: T, index: number, allValues: Array<T>) => boolean): List<T> {
		const list = new List<T>();
		const listLength = this.length();

		for (let i = 0; i < listLength; i++) {
			const value = this.values[i];
			const result = cb(this.values[i], i, this.values);

			if (result) {
				list.append(new List([value]));
			}
		}

		return list;
	}

	foldl<R>(cb: (acc: R, value: T, index: number, allValues: Array<T>) => R, acc: R): R {
		const listLength = this.length();
		let result: R = acc;

		for (let i = 0; i < listLength; i++) {
			result = cb(result, this.values[i], i, this.values);
		}

		return result;
	}

	foldr<R>(cb: (acc: R, value: T, index: number, allValues: Array<T>) => R, acc: R): R {
		const listLength = this.length();
		let result: R = acc;

		for (let i = listLength; i--;) {
			result = cb(result, this.values[i], i, this.values);
		}

		return result;
	}

	length(): number {
		let length = 0;

		while (this.values[length] != null) length++;

		return length;
	}

	map<R>(cb: (value: T, index: number, allValues: Array<T>) => R): List<R> {
		const list = new List<R>();
		const listLength = this.length();

		for (let i = 0; i < listLength; i++) {
			const result = cb(this.values[i], i, this.values);

			list.append(new List([result]));
		}

		return list;
	}

	reverse(): List<T> {
		const values: T[] = [];
		const listLength = this.length();

		for (let i = listLength; i--;) {
			values.push(this.values[i]);
		}

		return new List(values);
	}
}
