import _ from 'underscore';

console.log(
  _.omit(
    {id : 1, name : "ID", age : 32},
    'name',
    'age'
 ));
