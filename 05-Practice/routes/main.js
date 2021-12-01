const express = require('express');
const router = express.Router();

const {login,dashboard}=require('../controllers/main');

const authMiddleware = require('../middleware/auth');

router.route('/dashboard').get(authMiddleware, dashboard); //everytime we access this route, we will run the authMiddleware function
router.route('/login').post(login);

module.exports = router;