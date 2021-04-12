import _ from 'underscore';

var result = [1,2,3].forEach(function(val, idx, list) {
  console.log(val, idx, list);
});

console.log(result);


var result = _.each({a : 1, b : 2}, function (val, key, obj) {
  console.log(val, key, obj);
});

console.log(result);
