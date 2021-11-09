const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json([{name:'john'}, {name:'jane'}, {name:'joe'},]);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000 http://localhost:3000');
});