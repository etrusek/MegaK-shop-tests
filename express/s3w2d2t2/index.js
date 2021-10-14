const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('public'));

app.post('/calc', (req, res) => {
    const {numA, numB}= req.body;
    const check = (a, b) => {
        if(numA % numB === 0) {return true} else {return false}
    }
    res.json({'anser': check(numA,numA)})
})

app.listen(3000, '0.0.0.0', () => {
    console.log('Listen on port 3000');
})