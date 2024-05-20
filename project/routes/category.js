const express=require('express')
const joi=require('joi')//instal joi current version npm install joi@17.13.1
const mongoose=require('mongoose')
const router=express.Router()
const categorySchema=new mongoose.Schema({
    name:{type:String,required:true}
})
const Category=mongoose.model('category',categorySchema)


router.get('/api/category',async(req,res)=>{
    let categories=await Category.find()
    res.send(categories)
})
router.post('/api/category',async(req,res)=>{
    const {error}=validateData(req.body)
    if(error) res.status(400).send(error.details[0].message)
    const category=new Category({
        name: req.body.name
    })
    await category.save()
    res.send(category)
})
// router.put('/api/category/:id',(req,res)=>{
//     const category=categories.find(c=>c.id==parseInt(req.params.id))
//     if(!category) return res.status(404).send('Not found')
//         category.name=req.body.name
//         res.send(category)

// })
// router.delete('/api/category/:id',(req,res)=>{
//     const category=categories.find(c=>c.id==parseInt(req.params.id))
//     if(!category) return res.status(404).send('Not found')
//         const index=categories.indexOf(category)
//         categories.splice(index,1)
//         res.send(category)
// })
// router.get('/api/category/:id',(req,res)=>{
//     const category=categories.find(c=>c.id==parseInt(req.params.id))
//     if(!category) return res.status(404).send('Not found')
//         res.send(category)
// })
 function validateData(category){
     const schema = joi.object({
        name: joi.string().min(3).required()
    });
    return schema.validate(category);

}
module.exports=router