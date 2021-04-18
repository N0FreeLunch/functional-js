import _ from 'underscore';

var testList = [];
var result = testList.push("test");
console.log(result);
var result = testList.push("test");
console.log(result);

var list = _.range(200);

var list2 = [];
var limit = 5;

_.find(list, function (num) {
  return num % 2 == 0 && list2.push(num) == limit;
});

console.log(list2);

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
