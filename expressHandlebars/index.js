const express = require('express');
const hbs = require('express-handlebars');

const app = express();

app.engine('.hbs', hbs({extname:'.hbs'}));
app.set('view engine', '.hbs');

app.get('/',(req,res)=>{
    res.render('home')
})

app.listen(3000, '0.0.0.0', () => {
    console.log('Listening on port 3000...')
})