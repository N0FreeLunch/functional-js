console.time('익명함수');
for (var i = 0; i < 10000; i++) {
  (function(v) {return v;})(i);
}
console.timeEnd('익명함수');
