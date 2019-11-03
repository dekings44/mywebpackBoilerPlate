import { styleBody, addTitle, contact } from './dom';
import users, { getPremUsers, getPremUsers1 } from './data';

console.log('index file');
addTitle('test');
styleBody();
const premUsers = getPremUsers(users);
const premUsers1 = getPremUsers1(users);
//const getName = getNames(users);

console.log(contact);
console.log(users, premUsers, premUsers1);
