import _ from "../02-likeUnderscore/_/_.mjs";

console.time('4');
var arr = Array(10000);
_.map(arr, function (v, i) {
  return function (v, i) {
    return i * 2;
  }(v, i);
});
console.timeEnd('4');

console.time('5');
var arr = Array(10000);
_.map(arr, function (v, i) {
  return L('v, i => i * 2')(v, i);
});
console.timeEnd('5');
