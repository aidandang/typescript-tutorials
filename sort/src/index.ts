import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
numbersCollection.sort();

console.log(numbersCollection.data);

const characterCollection = new CharactersCollection('Xaayb');
characterCollection.sort();

console.log(characterCollection.data);

const linkedList = new LinkedList();

linkedList.add(500);
linkedList.add(40);
linkedList.add(62);
linkedList.add(7);

linkedList.sort();
linkedList.print();
