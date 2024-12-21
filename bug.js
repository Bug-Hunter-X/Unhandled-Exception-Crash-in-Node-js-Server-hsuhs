const http = require('http');

const server = http.createServer((req, res) => {
  // Logic to handle requests
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Page not found');
  }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

//Unhandled exception issue:  The server will crash if an unexpected error occurs during request handling.
//Example:
// server.on('error', (err) => {
//   console.error('Server error:', err);
//   // Handle the error appropriately, such as logging it or restarting the server.
// });