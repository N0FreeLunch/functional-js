import negativeIndex from "./negativeIndex.mjs";
import beq from "./beq.mjs";

// var every = function (list) {
//   return filter(list, identity).length === list.length;
// }

var every = function (list) {
  return beq(-1)(negativeIndex(list));
};

export default every;
