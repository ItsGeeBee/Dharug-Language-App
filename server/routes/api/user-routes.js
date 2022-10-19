/* eslint-disable no-unused-vars */
const router = require('express').Router();

const { response, request } = require('express');
const { addWord } = require('../../controllers/word-controller');
const {
  getAllUsers,
  getSingleUser,
  createUser,
  saveWord,
  deleteWord,
  login,
} = require('../../controllers/user-controller');

// import middleware
const { authMiddleware } = require('../../utils/auth');

// put authMiddleware anywhere we need to send a token for verification of user
router.route('/').post(createUser).put(authMiddleware, saveWord).get(getAllUsers);

router.route('/login').post(login);

router.route('/me').get(authMiddleware, getSingleUser);

router.route('/word/:wordId').delete(authMiddleware, deleteWord);

module.exports = router;
