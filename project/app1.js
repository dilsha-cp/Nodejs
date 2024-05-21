const express=require('express')
const mongoose=require('mongoose')
const categories=require('./routes/category')//route to category
const student=require('./routes/student')//route for student
const course=require('./routes/course')
const app=express()
mongoose.connect('mongodb://localhost/learing')
.then(()=>console.log('connection successful'))
.catch(error=>console.log('failed',error))

app.use(express.json());
app.use('/api/category',categories)
app.use('/api/student',student)//default url
app.use('/api/course',course)

const port=process.env.PORT ||8000
app.listen(port,()=>console.log('running on port 8000'))