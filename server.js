const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(__dirname +'/./client'))
app.post('/jason',(req,res)=>{
    res.status(201).jason(req.body)
})

app.get('/jason' , (req,res) =>{
    res.status(200).json(req,res)
  })

app.listen(3000,()=>{
    console.log('server is working')
})