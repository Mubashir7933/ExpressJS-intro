require('dotenv').config()
const express = require('express');
const app = express();
const port = 4000;

app.get('/',(req, res) =>{
    res.send('Hello world')
})

app.get('/instagram', (req, res) => {
    res.send('Mubashirahmed');
});

app.get('/login',(req, res) =>{
    res.send("<h1>Now you learned</h1>")
})

app.listen(process.env.port, ()=>{
    console.log(`Example app listening on port ${port}`);
})