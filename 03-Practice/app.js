const express = require('express');
const app = express();
const port = 3000;
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect.js')
require('dotenv').config();
const notFound = require('./middleware/not-found.js');

//middleware
app.use(express.static('public'));
app.use(express.json());

//routes
app.use('/api/v1/tasks', tasks)

// Middleware - 404
app.use(notFound)

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => console.log(`Server started on http://localhost:${port}/index.html`));
    } catch (error) {
        console.log(error);
    }
}

start()

// Put vs Patch - Read the commit comment