var calculateTax = (value, percentValue) => {
  return value/100 * (100 + percentValue);
}


console.log(calculateTax(50, 5));
