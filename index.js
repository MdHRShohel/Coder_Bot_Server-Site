const express = require('express');
const app = express();
const cors = require('cors');
const port =process.env.PORT || 5000;

app.use(cors());

const courses = require('./data/Courses.json');

app.get('/',(req,res)=>{
    res.send('CODER BOT API RUNNING...');
});

app.get('/courses',(req,res)=>{
    res.json(courses);
});

app.get("/courses/:id", (req, res) => {
  const id = req.params.id;
  const selectedCourse = courses.find((c) => c.id === id);
  res.send(selectedCourse);
});

app.listen(port,()=>{
    console.log(` Coder BOT Server running on port ${port}`);
});