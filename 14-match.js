function match(obj, obj2) {
  for (var key in obj2) {
    if(obj[key] !== obj2[key]) return false;
  }
  return true;
}

const obj1 = {a : "1", b : "2", c : "3"}

const obj2 = {a : "1", b : "2", c : "3"}

console.log(match(obj1, obj2));

const obj3 = {a : "1", b : "2", c : "c"}

console.log(match(obj1, obj3));
