const express = require('express')
const app = express()
const {people} = require('./data')

// Static assets
app.use(express.static('./methods-public'))

// Parse form data - urlencoded is built-in express middleware
app.use(express.urlencoded({extended: false}))

// parse json
app.use(express.json())

// GET METHOD
app.get('/api/people', (req, res) => {
  res.status(200).json({success:true, data:people})
})

// POST METHOD - Javascript
app.post('/api/people', (req, res) => {
    const {name} = req.body
    if (!name) {
      return res
          .status(400)
          .json({success:false, msg: 'Name is required'})
    }
  res.status(201).send({success:true, person: name})
})

// Adding another post method on a different route to test on postman
app.post('/api/postman/people', (req, res) => {
  const {name} = req.body
  if (!name) {
    return res
        .status(400)
        .json({success:false, msg: 'Name is required'})
  }
  res.status(201).send({success:true, data: [...people, name]})
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

app.put('/api/people/:id', (req, res) => {
  const {id} = req.params
  const {name} = req.body
    const person = people.find(person => person.id === Number(id))
    if (!person) {
      return res.status(404).json({success: false, msg: `Person not found with id ${id}`})
    }
    const newPeople = people.map(person => {
      if (person.id === Number(id)) {
        return {...person, name}
      }
      return person
    })
    res.status(200).json({success: true, data: newPeople})
})

app.listen(3000, () => {
    console.log('Server is running on port 3000 http://localhost:3000');
});