const http = require('http');

const server = http.createServer((req,res)=>{
res.write('Welcome to our homepage');
res.end()
})

server.listen(3000)

//Port 5000 gave me an error - Error: listen EADDRINUSE: address already in use :::5000
//Port 3000 worked fine. Read docs- https://nodejs.org/en/docs/guides/getting-started-guide/