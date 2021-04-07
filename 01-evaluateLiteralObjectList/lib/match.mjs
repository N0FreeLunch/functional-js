function match(obj, obj2) {
  for (var key in obj2) {
    if(obj[key] !== obj2[key]) return false;
  }
  return true;
}

export default match;
