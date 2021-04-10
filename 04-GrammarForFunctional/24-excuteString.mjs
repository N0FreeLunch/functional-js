var a = eval('10 + 5');
console.log(a);

var a = new Function('a, b', 'return a + b;');
console.log(a);
