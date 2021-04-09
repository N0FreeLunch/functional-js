var obj1 = {[true ? "a" : "b"] : 1};
console.log(obj1);

var obj2 = {};
obj2[true ? "a" : "b"] = 1;
console.log(obj2);
