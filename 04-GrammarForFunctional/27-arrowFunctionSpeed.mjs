console.time('new Function');
for (var i = 0; i < 10000; i++) {
  (function(v) {return v;})(i);
}
console.timeEnd('new Function');
