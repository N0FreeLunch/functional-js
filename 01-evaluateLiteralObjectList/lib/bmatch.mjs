import object from './object.mjs';
import match from './match.mjs';

function bmatch(obj2, val) {
  if(arguments.length == 2) obj2 = object(obj2, val);
  return function (obj) {
    return match(obj, obj2);
  }
}


export default bmatch;
