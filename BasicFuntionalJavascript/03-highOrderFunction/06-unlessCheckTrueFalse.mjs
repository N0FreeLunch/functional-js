import forEach from '../lib/forEach.mjs';

const unless = (predicate, fn) => {
  if(!predicate)
    fn()
}


forEach([1,2,3,4,5,6,7], (number) => {
  unless((number % 2), () => {
    console.log(number, "is even");
  });
});
