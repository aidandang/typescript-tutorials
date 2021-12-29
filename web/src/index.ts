import { User } from './models/User';

const user = new User({ name: 'Aidan', age: 44 });

console.log(user.get('name'));
