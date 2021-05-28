let global = "something";

let function1 = (input) => {
  global = "somthingElse";
}

let function2 = () => {
  if(global === "something")
  {
    // your code
  }
}
