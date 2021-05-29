var array = [1,2,3];

for(i=0;i<array.length;i++)
  console.log(array[i]);

const forEach = (array, fn) => {
  let i;
  for(i=0; i<array.length;i++)
    fn(array[i])
}
