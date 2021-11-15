const express = require('express');
const app = express();
const port = 3000;

//routes
app.get('/hello', ((req, res) => {
    res.send('Task Manager App!');
}));

// get all tasks
// create a new task
// get single task
// update task
// delete task

app.listen(port, () => console.log(`Task Manager app listening on port ${port}! http://localhost:${port}`));