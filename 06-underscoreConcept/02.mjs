var list1 = {};
list1[0] = 1, list1[1] = 2, list1.length = 3;

list1.pop = function () {
  delete this[this.length];
}

var d1 = {name : "PJ", age : 25};

var d2 = [1, 2, 3];

var d3 = function () {
  return arguments;
}(1, 2, 3);

// var d4 = $('div');
var d5 = {length : 3};
d5[0] = 1, d5[1] = 2, d5[2] = 3;
var d6 = "h1";

console.log(d3[0]);
console.log(d3[1]);
console.log(d3[2]);
console.log(d3.push);
