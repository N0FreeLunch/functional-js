import _ from "./_/_.mjs";

_.falsy = function (v) {
  return !v;
}

_.truthy = function (v) {
  return !!v;
}

console.log(_.filter([true, 0, 10, 'a', false, null], _.falsy));

console.log(_.filter([true, 0, 10, 'a', false, null], _.truthy));
