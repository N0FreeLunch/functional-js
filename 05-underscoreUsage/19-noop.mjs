import _ from 'underscore';

console.log(_.noop)
console.log(_.noop());

console.log(_.noop(10));

console.log(_.noop({}));

_.noop = function () {}

console.log(_.noop());
