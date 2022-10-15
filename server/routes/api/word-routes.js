const router = require('express').Router();

const {
    getAllWords,
    addWord
} = require('../../controllers/word-controller');


// import middleware
// const { authMiddleware } = require('../../utils/auth');

// Get all words on dictionary page
router.route('/').get( getAllWords).post(addWord);


// Add a new word to the dictionary
// put authMiddleware anywhere we need to send a token for verification of user 
// router.route('/:_id/dashboard').post(authMiddleware, addWord);

module.exports = router;