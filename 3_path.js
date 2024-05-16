//help to find the path of perticular file or folder
const path=require('path')
//let ext=path.extname('C:\Nodejs\.3_path.js')
let ext1=path.extname('C:\Nodejs\file.txt')
//console.log(ext)//to get extension of file 
console.log(ext1)
//to get the base name of file
let bn=path.basename('C:\\Nodejs\\file.txt')
//let bn2=path.basename('C:\\new\\thenth.txt')
console.log(bn)
//console.log(bn2)
//to get the filename
console.log(__filename)//C:\Nodejs\3_path.js
//to get directory
console.log(__dirname)//C:\Nodejs