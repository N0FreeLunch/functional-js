import filter from "./filter.mjs";
import identity from "./identity.mjs";

var every = function (list) {
  return filter(list, identity).length === list.length;
}

export default every;
