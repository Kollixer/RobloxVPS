const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Server is running\n');
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
