import filter from './lib/filter.mjs';
import map from './lib/map.mjs';

var users = [
  {id:1, name:"ID", age:32},
  {id:2, name:"HA", age:25},
  {id:3, name:"BJ", age:32},
  {id:4, name:"PJ", age:28},
  {id:5, name:"JE", age:27},
  {id:6, name:"JM", age:32},
  {id:7, name:"HI", age:24},
];

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
