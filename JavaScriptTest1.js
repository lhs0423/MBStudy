function sayHi() {      // (1) 함수 생성
    console.log( "Hello" );
  }
  
  let func = sayHi;    // (2) 함수 복사
  
  func(); // Hello     // (3) 복사한 함수를 실행(정상적으로 실행됩니다)!
  sayHi(); // Hello    //     본래 함수도 정상적으로 실행됩니다
  
  