let tellType = (arg) => {
  console.log(typeof arg)
}

let data = 1;
tellType(data)


let dataFn = () => {
  console.log("I'm a function")
}

tellType(dataFn)
