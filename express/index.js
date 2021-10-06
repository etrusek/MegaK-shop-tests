// const {createServer} = require('http');
//
// const server = createServer();
// //pierwsza wersja
// server.on('request', async (req, res) => {
//     res.writeHead(200, 'Content-Type: text/html');
//     res.end('<h1>Hello, World from back-end!</h1>');
// });
// server.listen(3000, 'localhost');
const express = require('express')

const app = express();
app.get('/', (req, res) => {
    res.send(req.get('user-agent'));
})

app.listen(3000, 'localhost', () => {
    console.log('listen on port 3000')
})

// const {URLSearchParams} = require('url');
// const qs = new URLSearchParams({
//     name: 'Bartek & Kuba?',
// });
// console.log(`http://localhost:3000/ciekawy/?${qs.toString()}`)

