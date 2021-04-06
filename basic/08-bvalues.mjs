import map from './lib/map.mjs';
import users from './lib/users.mjs';
import filter from './lib/filter.mjs';
import log_length from './lib/log_length.mjs';
import bvalue from './lib/bvalue.mjs';

(() => {
  // using anonymous funtion to avoid duplicate function name(bvalues) in hoisting area

  console.log("ES6 bvalues");

  // *** ES6 *** //
  var bvalues = key => list => map(list, v => v[key]);

  var ages = bvalues('age');
  var names = bvalues('name');

  console.log(ages(users));
  console.log(names(users));

})();

(() => {
  // using anonymous funtion to avoid duplicate function name(bvalues) in hoisting area

  console.log("not ES6 bvalues");
  // *** not ES6 *** //
  function bvalues(key) {
    return function(list) {
      return map(list, function (v) {
        return v[key];
      })
    }
  }

  var ages = bvalues('age');
  var names = bvalues('name');
  var under_30 = function (u) {return u.age < 30;}
  var over_30 = function (u) {return u.age >= 30;}

  console.log(log_length(ages(filter(users, under_30))));
  console.log(log_length(names(filter(users, over_30))));

})();

(() => {
  console.log("not ES6 bvalues");

  function bvalues(key) {
    var value = bvalue(key);
    return function (list) {
      return map(list, value);
    }
  }

  var ages = bvalues('age');
  var names = bvalues('name');
  var under_30 = function (u) {
      return u.age < 30;
  }
  var over_30 = function (u) {
    return u.age >= 30;
  }

  console.log(log_length(ages(filter(users, under_30))));
  console.log(log_length(names(filter(users, over_30))));

})();

(() => {
  function bvalues(key) {
    var value = bvalue(key);
    return function (list) { return map(list, value); };
  }
})();
