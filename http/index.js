const {createServer} = require('http');
const server = createServer();
const {readFile, writeFile, appendFile, readdir, stat, access, mkdir, rename, unlink} = require('fs').promises;

server.on('request', async (req, res) => {
    let counter = await readFile('./counter.txt', 'utf8');
    res.writeHead(200, 'Content-Type: text/plain');
    if (req.url !== '/favicon.ico') {
        const [, operation, num1, num2] = req.url.split('/');
        const num11 = Number(num1);
        const num22 = Number(num2);
        writeFile('./counter.txt', `${++counter}`);
        console.log(counter)
        res.write(counter + '\n');
        switch (operation) {
            case 'add':
                res.write(`${num11 + num22}\n`);
                break;
            case 'substract':
                res.write(`${num11 - num22}\n`);
                break;
            case 'multiply':
                res.write(`${num11 * num22}\n`);
                break;
            case 'divide':
                res.write(`${num11 / num22}\n`);
                break;
        }
        // res.write(`${result}`);
        res.write('end');
    }
    res.end();
});
server.listen(3000, 'localhost', () => {
    console.log('Listening on port 3000...')
});