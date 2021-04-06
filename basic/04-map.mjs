import filter from './lib/filter.mjs';
import users from './lib/users.mjs';

var users_under_30 = filter(users, function (e) {
  return e.age > 30;
});

var users_over_30 = filter(users, function (e) {
  return e.age < 30;
});

var ages = [];
for (var i = 0, len = users_under_30.length; i < len; i++) {
  ages.push(users_under_30[i].age);
}
console.log(ages);

var names = [];
for (var i = 0, len = users_over_30.length; i < len; i++) {
  names.push(users_over_30[i].name);
}
console.log(names)

function map(list, iterate) {
  var new_list = [];
  for (var i = 0, len = list.length; i < len; i++) {
    new_list.push(iterate(list[i]));
  }
  return new_list;
}

var ages = map(
  filter(users, function(user) {return user.age < 30}),
  function(user) { return user.age;}
);

console.log(age.length);
console.log(age);
