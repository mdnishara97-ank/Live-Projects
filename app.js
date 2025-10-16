const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('🚀 Hello Welcome to my First AWS project -naduni!\n');
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

