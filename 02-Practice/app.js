const express = require('express');
const app = express()
const port = 3000

app.get('/', (req, res) => {
  console.log('user hit the resource')
  res.status(200).send('Home Page')
})

app.get('/about',(req,res) => {
  console.log('user hit the resource')
  res.status(200).send('About Page')
})

app.all('*',(req,res) => {
  console.log('user hit the resource')
  res.status(404).send('<h1> 404 Page - Resource not found!</h1>')
})

app.listen(port, () => {
  console.log('Server is running on port 3000');
});

//app.get
//app.post
//app.put
//app.delete
//app.all
//app.use
//app.listen
