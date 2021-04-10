function L (str) {
  var splitted = str.split('=>');
  return new Function(splitted[0], 'return ('+splitted[1]+');')
}

console.log(L('n => n * 10')(10));
console.log(L('n => n * 10')(20));
console.log(L('n => n * 10')(30));

console.log(L('a, b => a + b')(10, 20));
console.log(L('a, b => a + b')(10, 5));
