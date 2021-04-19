import _ from 'underscore';

var list = _.range(200);

_.filter2 = function (data, predicate, limit) {
  var list2 = [];
  _.find(data, function (val, key, data) {
    return predicate(val, key, data) && list2.push(val) == limit;
  });
  return list2;
}

console.log(
  _.filter2(list, function (num) {
    return num % 2 ==0;
  }, 5)
);

var loopCount = 0;
_.filter2(list, function (num) {
  loopCount++;
  return num % 2 ==0;
}, 5);

console.log(loopCount);
