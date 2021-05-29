const forEachObj = (obj, fn) => {
  for(var property in obj) {
    if(obj.hasOwnProperty(property)) {
      fn(property, obj[property])
    }
  }
}


export default forEachObj;
