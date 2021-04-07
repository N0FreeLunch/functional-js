import users from './lib/users.mjs';

// 나이가 30미만인 사람을 출력하시오.
var temp_users = [];
for (var i = 0, len = users.length; i < len; i++) {
  if(users[i].age < 30)  temp_users.push(users[i]);
}
console.log(temp_users.length);
console.log(temp_users);

// 나이가 30미만인 사람들의 연령리스트
var ages = [];
for(var i=0, len = temp_users.length; i < len; i++) {
  ages.push(temp_users[i].age);
}
console.log(ages);

// 나이가 30 넘은 사람들을 출력하시오.
var temp_users = [];
for(var i=0, len=users.length; i < len; i++) {
  if(users[i].age >= 30) temp_users.push(users[i]);
}
console.log(temp_users.length);


// 나이가 30 넘은 대상들의 이름을 출력하시오
for(var i =0, len = users.length; i < len; i++) {
  names.push(temp_users[i].name);
}
console.log(names);


// 뭔가를 추출한 배열에서 특정 키값을 뽑음
