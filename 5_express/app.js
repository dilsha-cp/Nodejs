//post method is used to create
//get method is used to read
//put method is for update
//delete method used for delete


const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Sample data as an array
let courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' }
];

// Default route
app.get('/', (req, res) => {
    res.send('hello from dilsha');
});

// About route
app.get('/about', (req, res) => {
    res.send('hello from about');
});

// Contact route
app.get('/contact', (req, res) => {
    res.send('hello from contact');
});

// Get all courses
app.get('/courses', (req, res) => {
    res.send(courses);
});

// Get a course by ID
app.get('/course/:id', (req, res) => {
    const course = courses.find(course => course.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('Course not found');
    res.send(course);
});

// Get a course by name
app.get('/course1/:name', (req, res) => {
    const course = courses.find(course => course.name === req.params.name);
    if (!course) return res.status(404).send('Course not found');
    res.send(course);
});

// Create a new course
app.post('/courses', (req, res) => {
    const course = {
        id: courses.length ? courses[courses.length - 1].id + 1 : 1,  // Ensure unique ID
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

// Update an existing course
app.put('/courses/:id', (req, res) => {
    const course = courses.find(course => course.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('Course not found');
    
    course.name = req.body.name;
    res.send(course);
});

// Delete a course
app.delete('/courses/:id', (req, res) => {
    const course = courses.find(course => course.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('Course not found');

    courses = courses.filter(course => course.id !== parseInt(req.params.id));
    res.send(course);
});

// Define the port
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Running on port ${port}`));
