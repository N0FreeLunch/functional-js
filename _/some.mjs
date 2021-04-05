import positive from "./positive.mjs";

var some = function (list) {
  return not(not(positive(list)));
}

export default some;
