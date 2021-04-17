import _ from 'underscore';

console.log(
  _.pick(
    {id : 1, name : "ID", age : 32},
     'name',
     'age'
    ));
