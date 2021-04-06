import users from './lib/users.mjs';

function filter(list, predicate) {
  var new_list = [];
  // 함수 내부에서 정의된 변수는 함수 밖에서 사용되지 않는다.
  for(var i=0, len = list.length; i < len; i++) {
    // filter 함수를 정의할 때 사용하는 i는 for문 내부에서만 사용한다.
    // i는 함수 밖의 어떤 변수 또는 변수에 상당하는 대상의 값
    // 또는 상태를 컨트롤 하는 역할을 하지는 않는다.
    if (predicate(list[i])) new_list.push(list[i]);
    // predicate라는 매개 변수에 함수를 받는데
    // 이 함수는 불리언 값을 반환할 수 있는 함수
    // users 배열의 객체 하나하나씩 받음
  }
  return new_list;
}

var users_under_30 = filter(users,
  function(user) {return user.age < 30});
console.log(users_under_30);

var ages = [];
for (var i = 0, len = users_under_30.length; i < len; i++) {
  ages.push(users_under_30[i].age);
}
console.log(ages);

var users_over_30 = filter(users,
  function(user) { return user.age >= 30 });

console.log(users_over_30.length);
console.log(users_over_30);
// 나이가 30살 이상인 대상들을 뽑음

var names = [];
for (var i = 0, len = users_over_30.length; i < len; i++) {
  names.push(users_over_30[i].name)
}
// 나이가 30 이상인 대상들의 배열에서 이름만 뽑은 배열을 반환
console.log(names);
console.log(names.length);


var users_under_30 = filter(users, function(user) {return user.age >= 30});
// 나이가 30 이상인 대상들을 filter을 이용해서 뽑음
console.log(users_under_30.length);
console.log(users_under_30);
