import users from './lib/users.mjs';
import find from './lib/find.mjs';

function bmatch1(key, val) {
  return function (obj) {
    return obj[key] === val;
  }
}

console.log(find(users, bmatch1('id',1)));
console.log(find(users, bmatch1('name', 'HI')));
console.log(find(users, bmatch1('age', 27)));


function object (key, val) {
  var obj = {};
  obj[key] = val;
  return obj;
}

function match(obj, obj2) {
  for (var key in obj2) {
    if(obj[key] !== obj2[key]) return false;
  }
  return true;
}

function bmatch(obj2, val) {
  if(arguments.length == 2) obj2 = object(obj2, val);
  return function (obj) {
    return match(obj, obj2);
  }
}

console.log(
  match(find(users, bmatch('id',3)), find(users, bmatch('name', 'BJ')))
);

console.log(
  find(uses, function (u) {return u.age == 32 && u.name == "JM"})
);
