import identity from "./identity.mjs"
import find from "./find.mjs";

function positive(list) {
  return find(list, identity);
}

export default positive;
