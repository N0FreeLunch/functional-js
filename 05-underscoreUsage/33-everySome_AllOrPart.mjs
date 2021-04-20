import _ from 'underscore';

function printBool (val) {
  var result = Boolean(val);
  console.log(result);
  return result;
}

console.log(
  _.every([1,2,0,20,50], printBool)
);

console.log("----------");

console.log(
  _.some([1,2,0,20,50], printBool)
);
