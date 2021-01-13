function addMaker(a) {

  // 여기서 부터 클로저
  return function(b) {
    return a+b;
  }
  // 여기까지 클로저

}

addMaker(10)(5); //15


var add5 = addMaker(5);
// a에 5란 값이 적용된 함수를 반환 값으로 받음

add5(3);
add(4);

var v1 = 100;
var v2 = function () {};
function f1() {return 100;}
function f2() {return function () {}; }
