console.time('1');

var arr = Array(10000);
_.map(arr, function (v, i) {
  return i * 2;
});
