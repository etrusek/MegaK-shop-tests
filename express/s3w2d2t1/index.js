const express = require('express');

const PORT = 3000;
const app = express();

const voteBase = {
    'yes': 0,
    'no': 0,
}

app.use(express.static('public'))

for (const [vote, value] of Object.entries(voteBase)) {
    app.get(`/vote/${vote}`, (req, res) => {
        console.log(voteBase)
        voteBase[vote]++;
        res.send(`${voteBase[vote]}`);
    })
}
app.get('/vote/check',(req,res)=>{
    res.send(`YES: ${voteBase.yes}; \n NO: ${voteBase.yes}`)
})

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Listen on port ${PORT}`)
})