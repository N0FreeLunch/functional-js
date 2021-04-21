_.each({length : 4}, function() {
  console.log(arguments);
});

_.each(0, function() {
  console.log(arguments);
});

_.each(undefined, function () {
  console.log(arguments);
});

_.each(NaN, function () {
  console.log(arguments);
});
