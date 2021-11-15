const express = require('express')
const app = express()

const people = require('./routes/people')
const auth = require('./routes/auth')

// Static assets
app.use(express.static('./methods-public'))

// Parse form data - urlencoded is built-in express middleware
app.use(express.urlencoded({extended: false}))

// parse json
app.use(express.json())

// Routes middleware
app.use('/api/people', people)
app.use('/login', auth)


app.listen(3000, () => {
    console.log('Server is running on port 3000 http://localhost:3000');
});
