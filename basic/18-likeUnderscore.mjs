import _ from "./_/_.mjs";

console.log(_.filter([1, 2, 3, 4], function(val, idx) {
  return idx > 1;
}));

console.log(_.filter([1, 2, 3, 4], function (val, idx) {
  return idx % 2 == 0;
}));
