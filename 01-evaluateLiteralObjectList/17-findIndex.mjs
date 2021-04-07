import users from './lib/users.mjs';
import bmatch from './lib/bmatch.mjs';

function findIndex(list, predicate) {
  for (var i = 0, len = list.length; i < len; i++) {
    if(predicate(list[i])) return i;
  }
  return -1;
}

console.log(findIndex(users, bmatch({name:'JM', age : 32})));
console.log(findIndex(users, bmatch({age:36})));
