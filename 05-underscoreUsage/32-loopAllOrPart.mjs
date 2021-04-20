import _ from 'underscore';
import lodash from 'lodash';

function printBool (val) {
  var result = Boolean(val);
  console.log(result);
  return result;
}

_.each([1, 2, 0, 20, 50], printBool);
console.log("----------");

lodash.each([1, 2, 0, 20, 50], printBool);
console.log("----------");

lodash.map([1, 2, 0, 20, 50], printBool);
console.log("----------");

lodash.each([1, 2, 0, 20, 50], function (v) {
  printBool(v);
});
console.log("----------");

lodash.each([1, 2, 0, 20, 50], v => printBool(v));
console.log("----------");
