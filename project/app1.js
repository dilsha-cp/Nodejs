const express=require('express')
const mongoose=require('mongoose')
const categories=require('./routes/category')
const app=express()
mongoose.connect('mongodb://localhost/learing')
.then(()=>console.log('connection successful'))
.catch(error=>console.log('failed',error))

app.use(express.json());
app.use(categories)

const port=process.env.PORT ||8000
app.listen(port,()=>console.log('running on port 8000'))