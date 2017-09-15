// Creates a server listening on the port 1337, with the content Hello world 
var http = require('http');
http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
}).listen(process.env.PORT, process.env.IP);

console.log(`Server running!`);

