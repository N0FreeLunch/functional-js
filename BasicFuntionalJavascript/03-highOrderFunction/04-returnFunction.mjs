let crazy = () => {return String}

console.log(crazy());

let fn = crazy();

console.log(fn("HOC"));

console.log(crazy()("HOC"));
