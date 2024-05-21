const joi = require('joi'); // install joi current version npm install joi@17.13.1
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    isEntrolled: {
        type: Boolean,
        default: false
    },
    phone: {
        type: String,
        maxlength: 10
    }
});

const Student = mongoose.model('Student', studentSchema);

function validateData(students) {
    const schema = joi.object({
        name: joi.string().min(1).max(15).required(),
        isEntrolled: joi.boolean(),
        phone: joi.string().min(10).max(10).required() // ensure the phone number is exactly 10 characters
    });
    return schema.validate(students);
}

exports.Student = Student;
exports.validate = validateData;
