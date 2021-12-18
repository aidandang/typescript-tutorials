import { Sorter } from './Sorter';

class Node {
	next: Node | null = null;
	constructor(public data: number) {}
}

export class LinkedList extends Sorter {
	head: Node | null = null;

	add(data: number): void {
		const node = new Node(data);

		if (!this.head) {
			this.head = node;
			return;
		}

		let tail = this.head;
		while (tail.next) {
			tail = tail.next;
		}

		tail.next = node;
	}

	get length(): number {
		if (!this.head) {
			return 0;
		}

		let length = 1;
		let node = this.head;
		while (node.next) {
			length++;
			node = node.next;
		}

		return length;
	}

	at(index: number): Node {
		if (!this.head) {
			throw new Error('Index out of bounds');
		}

		let counter = 0;
		let node: Node | null = this.head;
		while (node) {
			if (counter === index) {
				return node;
			}

			counter++;
			node = node.next;
		}

		throw new Error('Index out of bounds');
	}

	compare(l: number, r: number): boolean {
		if (!this.head) {
			throw new Error('List is empty');
		}

		return this.at(l).data > this.at(r).data;
	}

	swap(l: number, r: number): void {
		const leftNode = this.at(l);
		const rightNode = this.at(r);

		const temp = leftNode.data;
		leftNode.data = rightNode.data;
		rightNode.data = temp;
	}

	print(): void {
		if (!this.head) {
			return;
		}

		let node: Node | null = this.head;
		while (node) {
			console.log(node.data);
			node = node.next;
		}
	}
}
