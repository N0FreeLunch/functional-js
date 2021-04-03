import _ from "./_/_.mjs";

var identity = function (v) {return v;}
var a = 10;

console.log(identity(a));

console.log(_.filter([true, 0, 10, 'a', false, null], identity));


console.log(_.filter([true, 0, 10, 'a', false, null], function (v) {
  return v;
}));
