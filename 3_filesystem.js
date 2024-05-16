const fs=require('fs')
/*there will be two method fileread and readfilesync readfile is used synchronasly
and readfilesync is used asynsronously*/
let content=fs.readFileSync('f1.text')
console.log('output->'+content)//use + it make the buffer to string(, not use here)
fs.writeFileSync('f2.txt','hello all')//sysn method create and enter the data
console.log('data entered')
//append or update file
fs.appendFileSync('f2.txt',' welcome')
console.log('data updated')
//to delete file
fs.unlinkSync('f3.txt')
console.log('deleted')