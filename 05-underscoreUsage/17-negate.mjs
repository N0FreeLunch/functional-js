import _ from 'underscore';

var eq5 = function (a) {
  return a == 5;
}

console.log(eq5(5));

var neq5 = _.negate(eq5);
console.log(neq5(5));
