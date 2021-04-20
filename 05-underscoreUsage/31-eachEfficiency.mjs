import _ from 'underscore';
import lodash from 'lodash';

var _i = 0;

_.each([1,2,3,4,5], function (v) {
  _i++;
  if(v < 3) console.log(v);
})

console.log(_i, '번 반복');

var lodash_i = 0;
lodash.each([1,2,3,4,5], function (v) {
  lodash_i++;
  console.log(v);
  return v < 2;
});

console.log(lodash_i, '번 반복');
