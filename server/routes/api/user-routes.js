const router = require('express').Router();
const {
  createUser,
  getSingleUser,
  saveWord,
  deleteWord,
  login,
} = require('../../controllers/user-controller');

// import middleware
const { authMiddleware } = require('../../utils/auth');

// put authMiddleware anywhere we need to send a token for verification of user
router.route('/').post(createUser).put(authMiddleware, saveWord);

router.route('/login').post(login);

router.route('/dashboard').get(authMiddleware, getSingleUser);

router.route('/word/:wordId').delete(authMiddleware, deleteWord);

module.exports = router;