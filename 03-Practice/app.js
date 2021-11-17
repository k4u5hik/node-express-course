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

// app.get('/api/v1/tasks') get all tasks
// app.post('/api/v1/tasks') create a new task
// app.get('/api/v1/tasks/:id') get single task
// app.patch('/api/v1/tasks/:id') update task
// app.delete('/api/v1/tasks/:id') delete task

app.listen(port, () => console.log(`Task Manager app listening on port ${port}! http://localhost:${port}`));

//
