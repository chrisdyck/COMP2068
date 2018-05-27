const http = require('http');

http.createServer((reqguest, response) => {

    response.writeHead(200);
    response.end('Our first node page');
}).listen(3000);

console.log('Server listening on port 3000');