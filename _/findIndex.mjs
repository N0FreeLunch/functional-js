var findIndex = function (list, predicate) {
  for(var i = 0, len = list.length; i < len; i++) {
    if(predicate(list[i], i, list)) return i;
  }
  return -1;
}
export default findIndex;
