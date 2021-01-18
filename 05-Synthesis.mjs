import filter from './lib/filter.mjs';
import map from './lib/map.mjs';
import users from './lib/users.mjs';

var names = map(
  filter(users, function(e) {return e.age < 30}),
  function (e) {return e.name}
);

console.log(names.length);
console.log(names);


function log_length(value) {
  console.log(value.length);
  return value;
}

console.log(
  log_length(
    map(
      filter(users, function(e) {return e.age < 30}),
      function (e) {return e.name}
    )
  )
);

console.log(
  log_length(
    map(
      filter(users, function (e) { return e.age >= 30}),
      function(e) {return e.name}
    )
  )
)
