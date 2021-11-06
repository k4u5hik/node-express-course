const http = require('http')
const {readFileSync} = require('fs')

// get all the files in the directory
const homePage = readFileSync('./navbar-app/index.html')

const server = http.createServer((req, res) => {
  //console.log(req.method, req.url)
  const url = req.url;
  //home page
  if (url === '/') {
    res.writeHead(200, {'Content-Type': 'text/html'})   // We provide metadata about the response, 200 means that the request was successful
    res.write(homePage)                                               // Changed from plain text to html
    res.end()                                                             // We end the response
    console.log('User hit the server')
    //about page
  } else if (url === '/about'){
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write('<h1> About Page\n </h1>' +
        'This is the about page')
    res.end()
  } else {
    //404 page
    res.writeHead(404, {'Content-Type': 'text/html'})
    res.write('<h1>404 Page not found</h1>')
    res.end()
  }
  })

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/')
})