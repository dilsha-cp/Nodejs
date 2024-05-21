const joi = require('joi')//instal joi current version npm install joi@17.13.1
const mongoose = require('mongoose')
const {categorySchema}=require('../models/categorymodel')//get category in course


const courseSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true,
        minlength:5,
        maxlength:35
    },
    category:{
        type:categorySchema,
        required:true,
    },
    creator:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true
    }
})
const Course = mongoose.model('course',courseSchema)
function validateData(course) {
    const schema = joi.object({
        title: joi.string().min(1).max(15).required(),
        categoryId: joi.string().required(),
        creator: joi.string().required(),
        rating: joi.number().required()
    });
    return schema.validate(course);

}

exports.Course=Course
exports.validate=validateData