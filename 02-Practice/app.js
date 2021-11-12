const express = require('express');
const app = express();

// req => middleware => res
app.get('/', (req, res) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(`${method} ${url} ${time}`); // GET / 2021
  res.send('Home');
});

app.get('/about', (req, res) => {
    res.send('About');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000 http://localhost:3000');
});