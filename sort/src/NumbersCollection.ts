export class NumbersCollection {
	constructor(public data: number[]) {}

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
