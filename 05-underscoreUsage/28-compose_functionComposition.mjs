import _ from 'underscore';

var list = [1,2,3,4,5];

function mul10(num) {
  return num * 10
}
function sub10(num) {
  return num - 10
}
function square(num) {
  return num * num
}

console.log(
  _.map(list, _.compose(square, sub10, mul10))
);

console.log(
  _.map(list, _.compose(
    function (num) {return num * num},
    function (num) {return num - 10},
    function (num) {return num * 10}
  ))
);

console.log(
  _.map(list, num => square(sub10(mul10(num))))
)
