var http = require('http');
var fs = require('fs');

const hostname = '127.0.0.1'
const port = 3000;

fs.readFile('index.html', (err, html) => {
  if(err){
    throw err;
  }

  const server = http.createServer((req,resp) => {
    resp.statusCode = 200;
    resp.setHeader('content-type', 'text/html');
    resp.write(html);
    resp.end();
  });
  
  server.listen(port, hostname, () => {
      console.log('server started');
  })
})

