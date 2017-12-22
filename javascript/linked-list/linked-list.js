var Node = function (value, previous, next) {
	this.value = value;
	this.previous = previous;
	this.next = next;
};

var LinkedList = function () {
	this.first = null;
	this.last = null;
};

LinkedList.prototype.push = function (value) {
	const node = new Node(value, null, null);
	let firstNode = this.first;
	let lastNode = this.last;

	if (!firstNode) {
		firstNode = node;
		this.first = node;
	}
	
	if (lastNode) {
		node.previous = lastNode;
		lastNode.next = node;
	}
	
	this.last = node;
};

LinkedList.prototype.pop = function () {
	const node = this.last;
	let previousNode = node.previous;

	if (previousNode) previousNode.next = null;
	this.last = previousNode;

	return node.value;
};

LinkedList.prototype.unshift = function (value) {
	const node = new Node(value, null, null);
	let firstNode = this.first;
	let lastNode = this.last;

	if (!lastNode) {
		lastNode = node;
		this.last = node;
	}

	if (firstNode) {
		node.next = firstNode;
		firstNode.previous = node;
	}

	this.first = node;
};

LinkedList.prototype.shift = function () {
	const node = this.first;
	let nextNode = node.next;

	if (nextNode) nextNode.previous = null;
	this.first = nextNode;

	return node.value;
};

LinkedList.prototype.count = function () {
	let node = this.first;
	let count = 1;

	if (!node) return 0;

	while (node.next != null) {
		node = node.next;
		count++;
	}

	return count;
};

LinkedList.prototype.delete = function (value) {
	let node = this.first;
	let previousNode;
	let nextNode;

	if (!node) return;

	while (node.next != null && node.value != value) node = node.next;

	previousNode = node.previous;
	nextNode = node.next;

	if (this.first === node) this.first = nextNode;
	if (this.last === node) this.last = previousNode;
	if (previousNode) previousNode.next = nextNode;
	if (nextNode) nextNode.previous = previousNode;
};

module.exports = LinkedList;
