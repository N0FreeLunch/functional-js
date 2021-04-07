import _ from "./_/_.mjs";

var compose = function() {
  var args = arguments;
  var start = args.length - 1;
  return function() {
    var i = start;
    var result = args[start].apply(this, arguments);
    while(i--) result = args[i].call(this, result);
    return result;
  };
};

var some = compose(_.not, _.not, _.positive);
var every = compose(_.beq(-1), _.negativeIndex);

console.log(some([0, null, 2]));
console.log(some([0, null, false]));
console.log(every([0, null, false]));
console.log(every([{}, true, 2]));
