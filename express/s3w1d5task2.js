const express = require('express');

const app = express();
let name = null

app.use(express.json())
app.use(express.static("./public"));
app.get('/',(req,res)=>{
    res.send();
})
app.post('/book',(req,res)=>{
    console.log(req.body)
    res.send('siema')
});

app.listen(3000,'0.0.0.0', ()=>{
    console.log('Listen on port 3000...')
})