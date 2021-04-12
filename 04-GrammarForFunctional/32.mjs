import _ from "../02-likeUnderscore/_/_.mjs";

function L(str) {
  var splitted = str.split('=>');
  return new Function(splitted[0], 'return ('+splitted[1]+');')
}

console.time('5');
var arr = Array(10000);
_.map(arr, function (v, i) {
  return L('v, i => i * 2')(v, i);
});
console.timeEnd('5');
