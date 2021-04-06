function bvalue(key) {
  return function(obj) {
    return obj[key];
  }
}

export default bvalue;
