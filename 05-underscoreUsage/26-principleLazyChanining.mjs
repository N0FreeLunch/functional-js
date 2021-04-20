function mul10(num) {
  return num * 10
}
function sub10(num) {
  return num - 10
}
function square(num) {
  return num * num
}

var list = [1,2,3,4,5];

var temp1 = [];
for(var i = 0; i < list.length; i++) {
  temp1.push(mul10(list[i]));
}

var temp2 = [];
for (var i = 0; i < temp1.length; i++) {
  temp2.push(sub10(temp1[i]));
}

var temp3 = [];
for (var i = 0; i < temp2.length; i++) {
  temp3.push(square(temp2[i]));
}


var underscoreLogicResult = temp3;
console.log(underscoreLogicResult);

var temp = [];
for(var i = 0; i < list.length; i++) {
  temp.push(square(sub10(mul10(list[i]))));
}

var lodashLogic = temp;
console.log(lodashLogic);
