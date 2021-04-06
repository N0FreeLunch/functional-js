import filter from './lib/filter.mjs';
import map from './lib/map.mjs';
import users from './lib/users.mjs';
import log_length from './lib/log_length.mjs';

console.log(log_length(map(filter(users, u => u.age < 30), u => u.age)));

console.log(log_length(
  map(filter(users, u => u.age >= 30), u => u.name)
));

var under_30 = u => u.age < 30;
var over_30 = u => u.age >= 30;

console.log(log_length(
  map(filter(users, under_30), u => u.age)
));

console.log(log_length(
  map(filter(users, over_30), u => u.name)
));

var ages = list => map(list, v => v.age);
var names = list => map(list, v => v.name);

console.log(log_length(ages(filter(users, under_30))));
console.log(log_length(names(filter(users, over_30))));
