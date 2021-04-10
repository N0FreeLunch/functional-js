!function (a) {
  console.log(a);
}(1);

true && function (a) {
  console.log(a);
}(2);

1 ? function (a) {
  console.log(a);
}(3) : 5;

0, function (a) {
  console.log(a);
}(4);

var b = function (a) {
  console.log(a);
}(5);

function f2() {}
f2(function (a) {
  console.log(a);
}(6));

var f3 = function c(a) {
  console.log(a);
}(7);

new function () {
  console.log(8);
}
