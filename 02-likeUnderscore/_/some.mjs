import positive from "./positive.mjs";
import not from "./not.mjs";

var some = function (list) {
  return not(not(positive(list)));
}

export default some;
