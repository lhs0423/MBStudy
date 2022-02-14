let start = new Date();

let now = new Date(); // 측정 시작
console.log(now);

for (let i = 0; i < 1000000000; i++) {
    let doSomething = i * i * i;
  }

let end = new Date(); // 측정 종료
console.log( `반복문을 모두 도는데 ${end - start} 밀리초가 걸렸습니다.` );