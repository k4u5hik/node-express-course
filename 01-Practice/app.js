//nodejs asynchronous programming
//nodejs is a event driven programming language
//nodejs is a single threaded language
//nodejs is a non-blocking language

const http = require ('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {

        res.end('Home Page');
    }
    else if (req.url === '/about') {
        //blocking code
        for (let i=0; i<1000; i++) {
            let a = 1+1;
            console.log(`${i} ${a}`);
        }

        res.end('About');
    }
    else {
        res.end('About Page')
    }
});
server.listen(3000,()=>{
    console.log('Listening on port 3000');
});