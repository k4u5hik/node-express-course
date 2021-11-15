const express = require('express');
const router = express.Router();

const {people} = require('../data')
const {  getPeople,
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson} = require('../controllers/people')

// GET METHOD
// router.get('/', getPeople)
//
// // POST METHOD - Javascript
// router.post('/', createPerson )
//
// // Adding another post method on a different router to test on postman
// router.post('/postman', createPersonPostman )
//
// //PUT METHOD
// router.put('/:id', updatePerson)
//
// //DELETE METHOD
// router.delete('/:id' , deletePerson)

// Alternative way to do the above - cleaner and easier to read

router.route('/').get(getPeople).post(createPerson);
router.route('/postman').post(createPersonPostman)
router.route('/:id').put(updatePerson).delete(deletePerson);

module.exports = router;