var identity = (i) => {return i};
var sum = (a,b) => {return a+b};

console.log(sum(4,5) + identity(1));

console.log(sum(4,5) + 1);
