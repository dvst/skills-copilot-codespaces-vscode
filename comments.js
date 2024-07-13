// Create web server 
// Create a web server that listens on port 3000. When you navigate to localhost:3000, the server should respond with "Hello, World!".
const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.end('Hello, World!');
}).listen(3000);

console.log('Server running at http://localhost:3000/');
