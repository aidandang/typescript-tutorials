import { Sorter } from './Sorter';

export class NumbersCollection extends Sorter {
	constructor(public data: number[]) {
		super();
	}

	get length(): number {
		return this.data.length;
	}

	compare(l: number, r: number): boolean {
		return this.data[l] > this.data[r];
	}

	swap(l: number, r: number): void {
		const temp = this.data[l];
		this.data[l] = this.data[r];
		this.data[r] = temp;
	}
}
