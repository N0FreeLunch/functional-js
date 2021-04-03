import users from './users.mjs';
import bmatch from './bmatch.mjs';

function findIndex(list, predicate) {
  for (var i = 0, len = list.length; i < len; i++) {
    if(predicate(list[i])) return i;
  }
  return -1;
}
