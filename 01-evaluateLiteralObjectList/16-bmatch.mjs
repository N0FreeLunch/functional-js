import users from './lib/users.mjs';
import find from './lib/find.mjs';

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

// making closure function
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
  find(users, function (u) {return u.age == 32 && u.name == "JM"})
);


console.log(
  find(users, bmatch({name : 'JM', age : 32}))
);
