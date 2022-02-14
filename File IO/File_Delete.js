const fs = require('fs');

//비동기 방식으로 파일 삭제
fs.unlink("/MB_NodeJS/File_Create.txt", err => {
    
    if(err.code == 'ENOENT'){
        console.log("파일 삭제 Error 발생");
    }
});


try {
	//동기 방식으로 파일 삭제
    fs.unlinkSync("/MB_NodeJS/동기방식새로운파일2.txt")

} catch (error) {

    if(err.code == 'ENOENT'){
        console.log("파일 삭제 Error 발생");
    }
}