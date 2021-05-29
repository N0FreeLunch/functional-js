const forEach = (array, fn) => {
  console.log(array.length)
  for (let i = 0; i < array.length; i++)
    fn(array[i]);
}

// usage
forEach([1,2,3], (data) => {
  console.log(data);
});


const forEachObject = (obj, fn) => {
  for(var property in obj) {
    if(obj.hasOwnProperty(property)) {
      fn(property, obj[property])
    }
  }
}


let object = {a:1, b:2}
forEachObject(object, (k,v) => console.log(k + ":" + v));
