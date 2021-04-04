import _ from "./_/_.mjs";

function positive(list) {
  return _.find(list, _.identity);
}

function negativeIndex(list) {
  return _.findIndex(list, not);
}

_.some = function (list) {
  return not(not(positive(list)));
}

_.every = function (list) {
  return beq(-1)(negativeIndex(list));
};

console.log(_.some([0, null, 2]));
console.log(_.some([0, null, false]));
console.log(_.every([0, null, false]));
console.log(_.every([{}, true, 2]));
