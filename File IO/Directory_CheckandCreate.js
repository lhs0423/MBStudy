const fs = require('fs');

//Directory 존재 여부 체크
const directory = fs.existsSync("./sample")   //디렉토리 경로 입력

console.log("Boolan : ", directory); //Directory가 존재 한다면 true 없다면 false

//fs.mkdirSync("생성 디렉토리 경로") //Directory 생성
 
//보통 Directory가 없다면 새로 만들어야 한다면 아래와 같은 코드를 만들어 사용할 수 있다.
if(!directory) fs.mkdirSync("/Test_Directory");