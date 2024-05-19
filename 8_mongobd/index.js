const mongoose=require('mongoose')
//to connect with database
mongoose.connect('mongodb://localhost/testdatabase')//if localhost is not connected giv 127.0.01
.then(()=>console.log('connected successfully'))
.catch(error=>console.console.error('failed',error))
//schema
const courseSchema=new mongoose.Schema({
    name:{type:String,required:true,minlength:1,maxlength:10},//for datavalidation if required is false that data is not cumpulsory
    author:{type:String,required:true},
    //custom data validator
    tags:{type:Array,required:true,validate:{
        validator:function(v){
            v.length>1
        }
    }},
    //inbuilt data validator
    category:{
        type:String,
        required:true,
        enum:['frontend','backend','analatics']//enum check the category with in the array if it is not match show error
    },
    publishDate:{type:Date,default:Date.now},
    ispublish:{type:String,required:true},
    rating:{type:Number,required:function(){return this.ispublish}}//it check the function ispublised
})
//to create model for the schema
const Course=mongoose.model('Course',courseSchema)
//to add data
async function create(){
    const course=new Course({
        name:'java8',
         author:'asd',
         tags:['express','mongo'],
         category:'backend',
         ispublish:true,
         rating:4.5

    })
    try {
        const result=await course.save()
        console.log('data entered')
        
    } catch (error) {
        for(feild in error.errors)
            console.log(error.errors[feild])
        
    }
    
}
create()
//to get data
async function getcourse(){
   // let course=await Course.find({author:'dilsha'}) get all the data 
   let course=await Course.find({author:'dilsha'}).select({name:1,publishDate:1})//sort({name:1}) for sort in decending order use -1
    console.log(course)
}
getcourse()
/*comparison operator 
eq=equal to
gt=greater than
gte =greater than and equal to
lt=less than
lte=less than and equal
neq=not equal to
in is used to specify the thing
notin */
async function getcourse1(){
    let course=await Course.find({rating:{$gte:4}})
    let course1=await Course.find({rating:{$in:1}})
    console.log(course)
}
getcourse1()
/*logical operator
or if one condition is true it execute
and both condition true or false */
async function getcourse2(){
    let course1=await Course.find({$or:[{name:'c'},{author:'dilsha'}]})
    let course=await Course.find({$and:[{name:'c'},{author:'dilsha'}]})
    console.log(course)
}
getcourse2()
/*update */
async function updatecourse(id){
    let course=await Course.findById(id)
    if(!course) return
    course.name='python'
    course.author='hij'
    let result=await course.save()
    console.log(result)
}
updatecourse('6648c87fcba4225f6830f916')
/*delete*/
async function deletecourse(id){
    let course=await Course.findByIdAndDelete(id)//findByIdAndRemove also used
    console.log('Data is deleted')
}
deletecourse('6648c87fcba4225f6830f916')