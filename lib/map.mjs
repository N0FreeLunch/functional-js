function map(list, iterate) {
  var new_list = [];
  for (var i = 0, len = list.length; i < len; i++) {
    new_list.push(iterate(list[i]));
  }
  return new_list;
}

export default map;
