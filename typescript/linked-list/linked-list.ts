class Node<T> {
	public value: T;
	public previous?: Node<T>;
	public next?: Node<T>;

	constructor(value: T, previous?: Node<T>, next?: Node<T>) {
		this.value = value;
		this.previous = previous;
		this.next = next;
	}
}

export default class LinkedList<T> {
	private head?: Node<T>;
	private tail?: Node<T>;

	constructor() {}

	count(): number {
		let node = this.head;
		let count = 0;

		while (node) {
			count++;
			node = node.next;
		}

		return count;
	}

	delete(value: T): void {
		const start = this.head;
		let current = start;

		if (!start) return;

		while (current) {
			if (current.value === value) {
				const { next, previous } = current;

				if (previous) {
					previous.next = next;
				} else {
					this.head = next;
				}

				if (next) {
					next.previous = previous;
				} else {
					this.tail = previous;
				}

				return;
			}

			current = current.next;
		}

		console.warn('Item not found in linked list');
	}

	pop(): T | undefined {
		const last = this.tail;
		const previous = last?.previous;

		if (previous) {
			previous.next = undefined;
			this.tail = previous;
		} else {
			this.head = undefined;
			this.tail = undefined;
		}

		return last?.value;
	}

	push(value: T): void {
		if (!this.tail) {
			const item = new Node<T>(value);
			this.head = item;
			this.tail = item;

			return;
		}

		const previous = this.tail;
		const item = new Node<T>(value, previous);

		previous.next = item;
		this.tail = item;
	}

	shift(): T | undefined {
		const first = this.head;
		const next = first?.next;

		if (next) {
			next.previous = undefined;
			this.head = next;
		} else {
			this.head = undefined;
			this.tail = undefined;
		}

		return first?.value;
	}

	unshift(value: T): void {
		if (!this.head) {
			const item = new Node<T>(value);
			this.head = item;
			this.tail = item;

			return;
		}

		const next = this.head;
		const item = new Node<T>(value, undefined, next);

		next.previous = item;
		this.head = item;
	}
}
