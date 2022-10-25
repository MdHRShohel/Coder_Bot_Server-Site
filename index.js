const express = require('express');
const app = express();
const port =process.env.PORT || 5000;

const categories = require('./data/CourseCategories.json');

app.get('/',(req,res)=>{
    res.send('CODER BOT API RUNNING...');
});

app.get('/course-categories',(req,res)=>{
    res.json(categories);
});

app.listen(port,()=>{
    console.log(` Coder BOT Server running on port ${port}`);
});