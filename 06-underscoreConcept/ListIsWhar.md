
### enigma
```
console.log(list1[0] == 1 && list1[1] == 2 && list1[2] == 3);
```
> ture
### guess
```
list1 = [1, 2, 3];
```

---

### enigma
```
console.log(list1.length == 3);
```
> true
### guess
```
list1 = [1, 2, 3];
```

---

### enigma
```
for(var i = 0; i < list1.length; i ++) {
  console.log(list[i]);
}
```
> 1


> 2

### guess
```
list1 = [1, 2];
```

---

### enigma
```
console.log(list1.constructor == Array);
```
> false


### guess
```
(function () {
  console.log(argument);  
})(1,2,3)
```

---

### enigma
```
list1.pop();
console.log(list1.length);
```
> 2
### guess
argument not has pop method
```
argument.__proto__.pop = function () {
  delete argument[argument.length];
  return argument[argument.length];
}
(function () {
  console.log(argument);  
})(1,2,3)
```

---

### enigma
```
```

### guess
```
```
