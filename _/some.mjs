import find from "./find.mjs";
import identity from "./identity.mjs";

var some = function (list) {
  return !!find(list, identity);
}

export default some;
