
import lodash from 'lodash';

var users = [
  {id : 1, name : "ID", age : 32, team_id : 2},
  {id : 2, name : "HA", age : 32, team_id : 2},
  {id : 3, name : "BJ", age : 32, team_id : 1},
  {id : 4, name : "PJ", age : 32, team_id : 1},
  {id : 5, name : "JE", age : 32, team_id : 2},
  {id : 6, name : "JM", age : 32, team_id : 1},
  {id : 7, name : "HI", age : 32, team_id : 2},
];

var me = {id : 3, name : "BJ", age : 32};

var query = lodash.chain(users)
  .filter(function (user) {
    return user.age == me.age;
  })
  .reject(function (user) {
    return user.id == me.id;
  });

$.get('/my_team_id', function (team_id) {
  query
  .filter(function (user) {
    return user.team_id == team_id;
  })
  .value()
});
