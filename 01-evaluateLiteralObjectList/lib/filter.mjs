function filter(list, predicate) {
  var new_list = [];
  // 함수 내부에서 정의된 변수는 함수 밖에서 사용되지 않는다.
  // 정의역
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
  // 치역
}

export default filter;
