const express = require('express')
const {Student,validate}=require('../models/studentmodel')
const router = express.Router()



router.get('/', async (req, res) => {
    let students = await Student.find()
    res.send(students)
})
router.post('/', async (req, res) => {
    const { error } = validate(req.body)
    if (error) res.status(400).send(error.details[0].message)
    const students = new Student({
        name: req.body.name,
        isEntrolled: req.body.isEntrolled,
        phone: req.body.phone
    })
    await students.save()
    res.send(students)
})
router.put('/:id', async (req, res) => {
    const { error } = validate(req.body)
    if (error) res.status(400).send(error.details[0].message)
    const students = await Student.findByIdAndUpdate(req.params.id,
        {
            name: req.body.name,
            isEntrolled: req.params.isEntrolled,
            phone: req.body.phone
        },
        { new: true })
    if (!students) return res.status(404).send('Not found')
    res.send(students)

})
router.delete('/:id', async (req, res) => {
    const students = await Student.findByIdAndDelete(req.params.id)
    if (!students) return res.status(404).send('Not found')
    res.send(students)
})
router.get('/:id', async (req, res) => {
    const students = await Student.findById(req.params.id)
    if (!students) return res.status(404).send('Not found')
    res.send(students)
})

module.exports = router