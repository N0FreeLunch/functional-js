const _ = {};

_.negate = function (func) {
  return function () {
    return !func.apply(this, arguments);
  }
}

var eq5 = function (a) {
  return a == 5;
}

console.log(eq5(5));

var neq5 = _.negate(eq5);
console.log(neq5(5));
