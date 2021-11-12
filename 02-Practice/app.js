const express = require('express')
const app = express()
const logger = require('./logger.js')
// req => middleware => res

// middleware function

app.use('/api',logger)

app.get('/',(req, res) => {
  res.send('Home')
});

app.get('/about', (req, res) => {
    res.send('About');
});

app.get('/api/products',(req, res) => {
    res.send('Products')
});

app.get('/api/items', (req, res) => {
    res.send('Items');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000 http://localhost:3000');
});