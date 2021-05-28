var global = "globalValue";
var badFunction = (value) => {
  global = "changed";
  return value * 2;
}


console.log(global);
console.log(badFunction(10));
console.log(global);
