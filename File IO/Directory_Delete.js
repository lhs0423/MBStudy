const fs = require('fs');

//비동기 방식으로 디렉토리 삭제
fs.rmdir("/Test_Directory",{ recursive: true }, err => {
    console.log("err : ", err);
})

//동기 방식으로 디렉토리 삭제
try {
    fs.rmdirSync("/Test_Directory", { recursive: true });
    console.log(`sample is deleted!`);
} catch (err) {
    console.error(`Error while deleting sample.`);
}