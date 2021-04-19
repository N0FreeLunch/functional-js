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

var list3 = [];
var loopCount = 0;
_.find(list, function (num) {
  loopCount++
  return num % 2 == 0 && list3.push(num) == limit;
});

console.log(loopCount);
