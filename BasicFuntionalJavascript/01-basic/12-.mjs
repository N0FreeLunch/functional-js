// p.36
var longRunningFunction = (ip) => {
  return ip + 100;
}

var longRunningFnBookKeeper = {2:3, 4:5}

longRunningFnBookKeeper.hasOwnProperty(ip) ?
  longRunningFnBookKeeper[ip] :
  longRunningFnBookKeeper[ip] = longRunningFunction(ip)


longRunningFunction(1)
longRunningFunction(2)
longRunningFunction(3)
longRunningFunction(4)
