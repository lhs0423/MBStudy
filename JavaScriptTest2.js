let sum = (a, b) => {  // 중괄호는 본문 여러 줄로 구성되어 있음을 알려줍니다.
    let result = a + b;
    return result; // 중괄호를 사용했다면, return 지시자로 결과값을 반환해주어야 합니다.
  };
  
  console.log( sum(1, 2) ); // 3
  
/* 위 화살표 함수는 아래 함수의 축약 버전입니다.
let sum = function(a, b) {
  return a + b;
};
*/