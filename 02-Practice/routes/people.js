const express = require('express');
const router = express.Router();

const {people} = require('../data')

// GET METHOD
router.get('/', (req, res) => {
    res.status(200).json({success:true, data:people})
})

// POST METHOD - Javascript
router.post('/', (req, res) => {
    const {name} = req.body
    if (!name) {
        return res
            .status(400)
            .json({success:false, msg: 'Name is required'})
    }
    res.status(201).send({success:true, person: name})
})


// Adding another post method on a different router to test on postman
router.post('/postman', (req, res) => {
    const {name} = req.body
    if (!name) {
        return res
            .status(400)
            .json({success:false, msg: 'Name is required'})
    }
    res.status(201).send({success:true, data: [...people, name]})
})

//PUT METHOD
router.put('/:id', (req, res) => {
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

//DELETE METHOD
router.delete('/:id', (req, res) => {
    const id = req.params.id
    const person = people.find(person => person.id === Number(id))
    if (!person) {
        return res
            .status(404)
            .json({success: false, msg: `Person not found with id ${id}`})
    }
    const newPeople = people.filter(person => person.id !== Number(id))
    return res
        .status(200)
        .json({success: true, data: newPeople})
})

module.exports = router;