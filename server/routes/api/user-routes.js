/* eslint-disable no-unused-vars */
const router = require('express').Router();

const {
  addWord,
  getUserWords,
  getAllUsers,
  getSingleUser,
  createUser,
  editWord,
  deleteWord,
  login,
  getFavouriteWords,
  addFavourite,
  deleteFavourite,
} = require('../../controllers/user-controller');

// import middleware
const { authMiddleware } = require('../../utils/auth');

// put authMiddleware anywhere we need to send a token for verification of user
router.route('/').post(createUser).get(getAllUsers);

router.route('/login').post(login);

router.route('/:id').get(authMiddleware, getSingleUser);

router.route('/:id/added').get(getUserWords);

router.route('/:userId/create').post(addWord);

router.route('/:userId/editWord/:wordId').put(editWord);

router.route('/:userId/deleteWord/:wordId').delete(deleteWord);

router.route('/:userId/addfavourite').put(addFavourite)

router.route('/:userId/favourite').get(getFavouriteWords)

router.route('/:userId/addfavourite/:wordId').delete(deleteFavourite);

module.exports = router;
