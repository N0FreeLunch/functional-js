import _ from 'underscore';

function mul10(num) {
  return num * 10
}
function sub10(num) {
  return num - 10
}
function square(num) {
  return num * num
}


var list = [1,2,3,4,5];

console.log(
_.map(list, function (num) {
  return square(sub10(mul10(num)));
})
);
