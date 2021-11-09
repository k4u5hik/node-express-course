const express = require('express');
const app = express();
const {products} = require('./data');

app.get('/', (req, res) => {
  res.json(products);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000 http://localhost:3000');
});