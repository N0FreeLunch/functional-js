var filter = function(list, predicate) {
  var new_list = [];
  for (var i = 0, len = list.length; i < len; i++) {
    if(predicate(list[i], i, list)) new_list.push(list[i]);
  }
  return new_list;
}

export default filter;
