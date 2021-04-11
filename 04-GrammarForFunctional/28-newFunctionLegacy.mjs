import _ from "../02-likeUnderscore/_/_.mjs";

function L(str) {
  var splitted = str.split('=>');
  return new Function(splitted[0], 'return ('+splitted[1]+');')
}

console.time('1');
var arr = Array(10000);
_.map(arr, function (v, i) {
  return i * 2;
});
console.timeEnd('1');
