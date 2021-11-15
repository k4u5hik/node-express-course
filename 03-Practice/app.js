const express = require('express');
const app = express();
const port = 3000;
const tasks = require('./routes/tasks');

//middleware
app.use(express.json());

//routes
app.get('/hello', ((req, res) => {
    res.send('Task Manager App!');
}));

app.use('/api/v1/tasks', tasks)

// get all tasks
// create a new task
// get single task
// update task
// delete task

app.listen(port, () => console.log(`Task Manager app listening on port ${port}! http://localhost:${port}`));