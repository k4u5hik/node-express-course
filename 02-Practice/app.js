const express = require('express')
const app = express()

// req => middleware => res

// middleware function
const logger = (req,res,next) => {
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear();
    console.log(`${method} ${url} ${time}`); // Example Terminal Response: GET / 2021
    next()
}
app.get('/', logger,(req, res) => {
  res.send('Home')
});

app.get('/about', logger, (req, res) => {
    res.send('About');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000 http://localhost:3000');
});