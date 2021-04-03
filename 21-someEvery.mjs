import _ from "./_/_.mjs";

_.some = function (list) {
  return !!_.find(list, _.identity);
}
_.every = function (list) {
  return _.filter(list, _.identity).length === list.length;
}

console.log(_.some([0, null, 2]));
console.log(_.some([0, null, false]));
console.log(_.every([0, null, 2]));
console.log(_.every([{}, true, 2]));
