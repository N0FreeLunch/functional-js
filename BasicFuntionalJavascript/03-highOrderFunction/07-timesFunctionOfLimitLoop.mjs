import unless from "../lib/unless.mjs";


const times = (time, fn) => {
  for(var i = 0; i < times; i++)
    fn(i);
}

console.log(times);


times(100, function (n) {
  unless(n % 2, function () {
    console.log(n, "is even");
  });
});
