const every = (arr, fn) => {
  let result = true;
  for(let i=0; i<arr.length;i++)
    result = result && fn(arr[i])
  return result;
}


console.log(every([NaN, NaN, NaN, NaN], isNaN));
console.log(every([NaN, NaN, 4], isNaN));
