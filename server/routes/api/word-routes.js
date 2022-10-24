const router = require('express').Router();

const {
  getAllWords,
  // getRandomWord
} = require('../../controllers/word-controller');


// Get all words on dictionary page
router.route('/').get(getAllWords);
router.route('/randomword').get(getRandomWord);

module.exports = router;
