import _ from 'underscore';
import users from '../01-evaluateLiteralObjectList/lib/users.mjs';

console.log(_.pluck(users, 'name'));
