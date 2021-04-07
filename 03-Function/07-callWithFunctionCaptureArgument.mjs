import _ from "../02-likeUnderscore/_/_.mjs";

function callWith(val1) {
  return function (val2, func) {
    return func(val1, val2);
  }
}

console.log(callWith([1,2,3])(function (v) {
  return v * 10;
}, _.map));
