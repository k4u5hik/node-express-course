const express = require('express');
const app = express();
const port = 3000;

//routes
app.get('/hello', ((req, res) => {
    res.send('Task Manager App!');
}));

app.listen(port, () => console.log(`Task Manager app listening on port ${port}! http://localhost:3000`));