import filter from './lib/filter.mjs';
import map from './lib/map.mjs';
import users from './lib/users.mjs';
import log_length from './lib/log_length.mjs';

 function addMaker(a) {
   return function(b) {
     return a+b;
   }
 }

 // make function key binded
 function bvalue(key) {
   return function(obj) {
     return obj[key];
   }
 }

console.log(bvalue('a')({a : 'h1', b:'hello'}));

console.log(log_length(
  map(
    filter(users, function(user) {
      return user.age < 30
    }),
    bvalue('age')
  )
));

console.log(log_length(
  map(
    filter(users, function(user) {
      return user.age >= 30
    }),
    bvalue('name')
  )
));
