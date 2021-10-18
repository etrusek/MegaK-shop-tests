const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();


app.use(express.static('./public'))
app.use(express.json())
app.use(cookieParser());

app.post('/cookie/set', (req, res) => {
    const {name} = req.body;
    console.log(name)
    res.cookie('name', name);
    res.send("Zapisano imię")
})

app.get('/cookie/show', (req, res) => {
    const {name}= req.cookies;
    res.send(name)
})

app.get('/cookie/check', (req, res) => {
    const {name}= req.cookies;
    if(name){
        res.send('Imię jest zapisane')
    } else {
        res.send('Nie znam imienia')
    }
})

app.listen(3000, 'localhost', () => {
    console.log('Listen on port 3000...')
})