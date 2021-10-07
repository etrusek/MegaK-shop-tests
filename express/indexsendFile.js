const express = require('express');
const {join} = require('path');

const app = express();

app.get('/', (req,res)=>{
    res.sendFile(join(__dirname, 'files','PXL_20210925_070131464.jpg'))
})

app.get('/other', (req,res)=>{
    res.sendFile('PXL_20210925_070131464.jpg',{
        root: join(__dirname, 'files'),
    })
})

app.get('/attach', (req,res)=>{
    res.attachment('PXL_20210925_070131464.jpg',{
        root: join(__dirname, 'files'),
    })
    res.end();
})

app.listen(3000, 'localhost', ()=>{
    console.log('Listen on port 3000...')
})