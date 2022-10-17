const { Word } = require('../models');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

module.exports = {

async getAllWords({word}, res) {
        const allWords = await Word.find();
        console.log(word);
    if (!allWords) {
        return res.status(400).json({ message: 'Oh no! Misplaced the dictionary!' });
        }
        res.json(allWords);

      },

  async addWord({word, body}, res) {

        const addedWords = await Word.create(body);
        if (!addedWords) {
          return res.status(400).json({ message: 'Cannot add that word' });
        }
      return res.json(addedWords);
    },

async getUserWords(req,res) {

  const records = await Word.find(
    { '_id': { $in: ids } });

  const foundUser = await User.findOne(
    { _id: req.body.userId });

  if (records ) {
    
  }
  return res.json(records);

}
};
// async addWord(req, res) {
//     console.log(user);
//     try {  
//         const addedWords = await Word.findOneAndUpdate(
//             { _id: user._id },
//             { $addToSet:{ word: body}},
//             { new: true, runValidators: true }
//         );
//         return res.json(addedWords);
 