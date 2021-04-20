import _ from 'underscore';

var list = _.range(200);

_.filter2 = function (data, predicate, limit, context) {
  if(context) predicate = predicate.bind(context);
  var list2 = [];
  _.find(data, function (val, key, data) {
    return predicate(val, key, data) && list2.push(val) == limit;
  });
  return list2;
}

_.mixin(_);

console.log(
  _.chain(list)
  .filter2(function(num) {
    return num % 2 == 0;
  }, 5)
  .value()
);
