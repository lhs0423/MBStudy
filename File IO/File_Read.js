const fs = require('fs');

//비동기 방식으로 파일 정보 읽기
fs.readFile('/MB_NodeJS/File_Test.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data); // 파일 데이터 정보
});

//동기 방식으로 파일 정보 읽기
const file = fs.readFileSync('/MB_NodeJS/File_Test.txt', 'utf8')
console.log("file : ", file);