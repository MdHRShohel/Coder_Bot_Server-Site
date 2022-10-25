const express = require('express');
const app = express();
const port =process.env.PORT || 5000;


app.get('/',(req,res)=>{
    res.send('CODER BOT API RUNNING...');
});

app.listen(port,()=>{
    console.log(` Coder BOT Server running on port ${port}`);
});