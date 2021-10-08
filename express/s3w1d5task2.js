const express = require('express');

const app = express();
let name = null
app.get('/',(req,res)=>{
    res.send('Hello on main site')
});

app.get('/name/set/:name',(req,res)=>{
    name = req.params.name
    res.send(`Masz na imię : ${name}. Zapisano`)
});

app.get('/name/show',(req,res)=>  {
    res.send(`Sprawdzasz imię. Proszę bardzo: ${name ? name : 'Nie znam twojego imienia'}`)
});

app.get('/name/check',(req,res)=>{
    res.send(`${name ? 'Twoje imie jest już zapisane': 'Nie zapisano twojego imienia'}`)
});

app.listen(3000,'0.0.0.0', ()=>{
    console.log('Listen on port 3000...')
})