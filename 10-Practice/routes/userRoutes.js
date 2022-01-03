const express = require('express');
const router = express.Router();

const {
  getAllUsers,
  getSingleUser,
  showCurrentUser,
  updateUser,
  updateUserPassword
} = require('../controllers/userController');

router.route('/').get(getAllUsers);


router.route('/showMe').get(showCurrentUser);//if the location from above :id to below it, it shows showMe as the current user. We don't want that.
router.route('/updateUser').patch(updateUser);
router.route('/updateUserPassword').patch(updateUserPassword);

router.route('/:id').get(getSingleUser);

module.exports = router;