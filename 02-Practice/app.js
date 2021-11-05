const http = require('http')

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' }) // We provide metadata about the response , 200 means that the request was successful
  res.write('<h1> Hello World\n </h1>')                           // Changed from plain text to html
    res.end()                                                           // We end the response
      console.log('User hit the server')
})

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/')
})