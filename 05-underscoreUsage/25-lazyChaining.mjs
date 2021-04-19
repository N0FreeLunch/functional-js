import _ from 'underscore';
import lodash from 'lodash';

function mul10(num) {return num * 10}
function sub10(num) {return num - 10}
function square(num) {return num * num}

var list = [1,2,3,4,5];
var result2 =
  _.chain(list)
  .map(mul10)
  .map(sub10)
  .map(square)
  .value();

console.log(result2);


var list = [1,2,3,4,5];
var result1 =
  lodash.chain(list)
  .map(mul10)
  .map(sub10)
  .map(square)
  .value();

console.log(result1);
