const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send(`Hello on main page`)
})

app.get('/:firstNum/:secondNum',(req,res)=>{

    const {firstNum , secondNum}=req.params
    const sum = (a,b)=>{
        return parseInt(a) + parseInt(b);
    }
    res.send(`sum is : ${sum(firstNum, secondNum)}`)
})

app.listen(3000, '0.0.0.0', ()=>{
    console.log('Listening on port 3000...')
})