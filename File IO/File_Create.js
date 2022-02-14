const fs = require('fs');

//비동기 방식으로 파일 정보 읽기
const file = fs.readFileSync('/MB_NodeJS/File_Test.txt', 'utf8')
console.log(file);

/**
 * 비동기 방식으로 새로운 파일 만들기
 * "./sample2.txt" : 파일 생성할 경로
 * file : 파일 데이터
 */
fs.writeFile("/MB_NodeJS/File_Create.txt", file, (err) =>{
    console.log(err);
})

/**
 * 동기 방식으로 새로운 파일 만들기
 * "./sample2.txt" : 파일 생성할 경로
 * file : 파일 데이터
 */
// fs.writeFileSync("/MB_NodeJS/File_Create2.txt", file)