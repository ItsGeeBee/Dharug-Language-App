/* eslint-disable no-unused-vars */
const router = require('express').Router();

const {
  getAllUsers,
  getSingleUser,
  createUser,
  deleteWord,
  login,
} = require('../../controllers/user-controller');

// import middleware
const { authMiddleware } = require('../../utils/auth');

// put authMiddleware anywhere we need to send a token for verification of user
router.route('/').post(createUser).get(getAllUsers).get(authMiddleware, getSingleUser)

router.route('/login').post(login);

router.route('/dashboard').get(authMiddleware, getSingleUser, ).delete(authMiddleware, deleteWord);

module.exports = router;
