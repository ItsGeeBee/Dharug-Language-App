/* eslint-disable no-unused-vars */
const router = require('express').Router();

const {
  addWord,
  getUserWords,
  getAllUsers,
  getSingleUser,
  createUser,
  deleteWord,
  login,
  addFavourite,
  deleteFavourite,
} = require('../../controllers/user-controller');

// import middleware
const { authMiddleware } = require('../../utils/auth');

// put authMiddleware anywhere we need to send a token for verification of user
router.route('/').post(createUser).get(getAllUsers);

router.route('/login').post(login);

router.route('/:userId').get(authMiddleware, getSingleUser);

router.route('/:userId/added').get(getUserWords);

router.route('/:userId/create').post(addWord);

router.route('/:userId/:wordId').delete(deleteWord);

router.route('/:userId/addfavourite').put(addFavourite);

router.route('/:userId/addfavourite/:wordId').delete(deleteFavourite);

module.exports = router;
