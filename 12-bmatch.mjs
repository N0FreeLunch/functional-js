import users from './lib/users.mjs';
import find from './lib/find.mjs';

function bmatch(key, val) {
  return function (obj) {
    return obj[key] === val;
  }
}

console.log(find(users, bmatch('id',1)));
console.log(find(users, bmatch('name', 'HI')));
console.log(find(users, bmatch('age', 27)));
