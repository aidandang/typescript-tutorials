import { User } from './models/User';

const user = new User({ name: 'Aidan', age: 44 });

user.save();
