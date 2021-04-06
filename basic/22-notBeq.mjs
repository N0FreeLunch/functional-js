import _ from "./_/_.mjs";

function not (v) {return !v;}

function beq (a) {
  return function (b) {
    return a === b;
  }
}

console.log(_.some([0, null, 2]));
console.log(_.some([0, null, false]));
console.log(_.every([0, null, 2]));
console.log(_.every([{}, true, 2]));
