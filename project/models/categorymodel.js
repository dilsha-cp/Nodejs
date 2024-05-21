const joi = require('joi')//instal joi current version npm install joi@17.13.1
const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    name: { type: String, required: true }
})
const Category = mongoose.model('category', categorySchema)
function validateData(category) {
    const schema = joi.object({
        name: joi.string().min(3).required()
    });
    return schema.validate(category);

}
exports.Category=Category
exports.categorySchema=categorySchema
exports.validate=validateData

