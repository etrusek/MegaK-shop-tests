const {createServer} = require('http');
const server = createServer();
const {readFile, writeFile} = require('fs').promises;

server.on('request', async (req, res) => {
    let counter = await readFile('./counter.txt', 'utf8');
    res.writeHead(200, 'Content-Type: text/plain');
    if (req.url !== '/favicon.ico') {
        const [, operation, num1, num2] = req.url.split('/');
        await writeFile('./counter.txt', `${++counter}`);
        res.write(counter + '\n');
        const result = (operation, num1, num2) => {
            switch (operation) {
                case 'add':
                    return num1 + num2
                case 'substract':
                    return num1 - num2
                case 'multiply':
                    return num1 * num2
                case 'divide':
                    return num1 / num2
            }
        }

        res.write(`${result(operation, Number(num1), Number(num2))}\n`);
        res.write('end');
    }
    res.end();
});
server.listen(3000, 'localhost', () => {
    console.log('Listening on port 3000...')
});