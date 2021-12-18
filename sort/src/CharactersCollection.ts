import { Sorter } from './Sorter';

export class CharactersCollection extends Sorter {
	constructor(public data: string) {
		super();
	}

	get length(): number {
		return this.data.length;
	}

	compare(l: number, r: number): boolean {
		return this.data[l].toLowerCase() > this.data[r].toLowerCase();
	}

	swap(l: number, r: number): void {
		const characters = this.data.split('');

		const temp = characters[l];
		characters[l] = characters[r];
		characters[r] = temp;

		this.data = characters.join('');
	}
}
