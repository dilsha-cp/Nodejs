//child process is a node module used to create sub proccess with in a script
//you can perform different task with your script by just using some method.
const cp=require('child_process')
cp.execSync('calc')//to open calculator
//for website
cp.execSync('start chrome https://www.google.com/search?q=scalar+reveiw&rlz=1C1JJTC_enIN1031IN1064&oq=scalar&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDkyBggCEEUYQDIGCAMQIxgnMg8IBBAuGAoYxwEY0QMYgAQyFQgFEC4YChiDARjHARixAxjRAxiABDIPCAYQABgKGIMBGLEDGIAEMgcIBxAAGIAE0gEJMzQ2NmowajE1qAIJsAIB&sourceid=chrome&ie=UTF-8')
//open a module
console.log('output '+cp.execSync('node demo.js'))
