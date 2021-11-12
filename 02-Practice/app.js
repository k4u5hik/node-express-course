const express = require('express')
const app = express()
const logger = require('./logger.js')
const authorize = require('./authorize.js')
const morgan = require('morgan')

// req => middleware => res

// middleware function

// use vs route
// options - your own/ express / third party

app.use([morgan('tiny')])

app.get('/',(req, res) => {
  res.send('Home')
});

app.get('/about', (req, res) => {
    res.send('About');
});

app.get('/api/products',(req, res) => {
    res.send('Products')
});

app.get('/api/items', [logger,authorize],(req, res) => {
    console.log(req.user)
    res.send('Items');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000 http://localhost:3000');
});