import findIndex from "./findIndex.mjs";
import not from "./not.mjs";

function negativeIndex(list) {
  return findIndex(list, not);
}

export default negativeIndex;
