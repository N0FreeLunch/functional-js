import _ from 'underscore';

var list = [1, 2, 3, 4, 5, 6];

_.reject(list, function (num) {
  return num % 2 === 0;
});

console.log(list);

console.log(_.contains([1, 2, 3], 3));

console.log(_.isArray([1, 2, 3]));
