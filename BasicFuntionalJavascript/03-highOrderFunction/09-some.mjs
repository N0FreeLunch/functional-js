const some = (arr, fn) => {
  let result = false;
  for(const value of arr)
    result = result || fn(value)
  return result
}


console.log(some([NaN, NaN, 4], isNaN));
console.log(some([3,4,4], isNaN));
