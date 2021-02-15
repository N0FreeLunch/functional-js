import users from './lib/users.mjs';
import map from './lib/map.mjs';
import filter from './lib/filter.mjs';

function User(id, name, age) {
  this.getId = function () {
    return id;
  };
  this.getName = function () {
    return name;
  }
  this.getAge = function () {
    return age;
  }
}

var users2 = [
  new User(1,"ID", 32),
  new User(2,"HA", 25),
  new User(3,"BJ", 32),
  new User(4,"PJ", 28),
  new User(5,"JE", 27),
  new User(6,"JM", 32),
  new User(7,"HI", 24),
];

function findBy(key, list, val) {
  for (var i = 0, len = list.length; i < len; i++) {
    if(list[i][key] === val) return list[i];
  }
}

console.log(users2.map((item, i) => {
  return item.getId();
}));

console.log(findBy('age', users2, 25));


function find(list, predicate) {
  for (var i = 0, len = list.length; i < len; i++) {
    if(predicate(list[i])) return list[i];
  }
}

console.log(
  find(users2, function(u) {return u.getAge() == 25;}).getName()
);

console.log(
  find(users, function (u) {return u.name.indexOf('P') != -1;})
);

console.log(
  find(users, function(u) {return u.age == 32 && u.name == 'JM';})
);

console.log(
  find(users2, function (u) {return u.getAge() < 30;}).getName()
);

console.log(
  map(filter(users, function (u) {return u.age >= 30}),
    function (u) {return u.name;})
);

console.log(
  map(filter(users2, function (u) {return u.getAge() > 30}),
  function (u) {return u.getName();})
);
