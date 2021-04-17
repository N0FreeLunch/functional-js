import _ from 'underscore';

console.log(
  _.filter(
  _.map([1,2,3], function (n) {return n * 2}),
  function (n) {return n <= 4;}
  )
)

console.log(
  _.chain([1,2,3])
    .map(function(n) {return n * 2})
    .filter(function (n) {return n <= 4})
    .value()
);
