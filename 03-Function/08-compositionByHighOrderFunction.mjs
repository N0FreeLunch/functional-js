import _ from "../02-likeUnderscore/_/_.mjs";

function callWith(val1) {
  return function (val2, func) {
    return func(val1, val2);
  }
}

_.get = function (list, idx) {
  return list[idx];
}

var callWithUsers = callWith([
  { id : 2, name : "HA", age : 25},
  { id : 4, name : "PJ", age : 28},
  { id : 5, name : "JE", age : 27}
]);

console.log(callWithUsers(2, _.get));


console.log(callWithUsers(function (user) {
  return user.age > 25;
}, _.find));

console.log(callWithUsers(function (user) {
  return user.age > 25;
}, _.filter));

console.log(callWithUsers(function (user) {
  return user.age > 25;
}, _.some));

console.log(callWithUsers(function (user) {
  return user.age > 25;
}, _.every));
