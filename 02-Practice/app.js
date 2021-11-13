const express = require('express')
const app = express()
const {people} = require('./data')

// Static assets
app.use(express.static('./methods-public'))

// Parse form data - urlencoded is built-in express middleware
app.use(express.urlencoded({extended: false}))

// GET METHOD
app.get('/api/people', (req, res) => {
  res.status(200).json({success:true, data:people})
})

// POST METHOD
app.post('/login', ((req, res) => {
    console.log(req.body)
    const {name} = req.body
    if (name) {
      return res.status(200).send(`Welcome ${name}`)
    }
    res.status(401).send(`Please provide credentials`)
    res.send('POST')
}))

app.listen(3000, () => {
    console.log('Server is running on port 3000 http://localhost:3000');
});