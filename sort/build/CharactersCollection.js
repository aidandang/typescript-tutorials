"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollection = void 0;
const Sorter_1 = require("./Sorter");
class CharactersCollection extends Sorter_1.Sorter {
    constructor(data) {
        super();
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(l, r) {
        return this.data[l].toLowerCase() > this.data[r].toLowerCase();
    }
    swap(l, r) {
        const characters = this.data.split('');
        const temp = characters[l];
        characters[l] = characters[r];
        characters[r] = temp;
        this.data = characters.join('');
    }
}
exports.CharactersCollection = CharactersCollection;
