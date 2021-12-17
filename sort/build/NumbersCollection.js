"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollection = void 0;
class NumbersCollection {
    constructor(data) {
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(l, r) {
        return this.data[l] > this.data[r];
    }
    swap(l, r) {
        const temp = this.data[l];
        this.data[l] = this.data[r];
        this.data[r] = temp;
    }
}
exports.NumbersCollection = NumbersCollection;
