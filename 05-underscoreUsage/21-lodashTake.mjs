import _ from 'underscore';
import lodash from 'lodash';

var list = _.range(50);

console.log("list", list);

var _i = 0;
var result1 =
  _.chain(list)
  .filter(function (num) {
    _i++;
    return num % 2 === 0;
  })
  .take(5)
  .value();

console.log(result1, _i);

var lodash_i = 0;
var result2 =
  lodash.chain(list)
        .filter(function (num) {
          lodash_i++;
          return num % 2 == 0;
        })
        .take(5)
        .value();

console.log(result2, lodash_i);
