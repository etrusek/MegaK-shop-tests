const {createServer} = require('http');

const server = createServer();
let counter = 0;
createServer((req,res)=>{
    if (req.url === '/'){
        counter++;
    }
    console.log(counter)
    res.writeHead(200, {"Content-type": 'text/plain'})
    res.end(`${counter}`,'utf8')
}).listen(3000,'localhost')
