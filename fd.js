const fs=require('fs')
//to create a directory
// fs.mkdirSync('demodir')
//console.log('dir created successfully')
let folderpath='C:\\Nodejs\\demodir'
let foldercontent=fs.readdirSync(folderpath)
console.log('content->',foldercontent)//when use , it give an array with index
// to check if dir exists or not give boolen value as output
let exist=fs.existsSync('demodir')
console.log(exist)
let exist2=fs.existsSync('mydemo')
console.log(exist2)
//to delete
fs.rmdirSync('demodir1')
console.log('deleted')