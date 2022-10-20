const { Word } = require('../models');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

module.exports = {

  async getAllWords({ word }, res) {
    const allWords = await Word.find();
    console.log(word);
    if (!allWords) {
      return res.status(400).json({ message: 'Oh no! Misplaced the dictionary!' });
    }
    res.json(allWords);
  },

  async addWord(req, res) {
    const addedWords = await Word.create(req.body);
    console.log(addedWords)
    if (!addedWords) {
      return res.status(400).json({ message: 'Cannot add that word' });
    }
    return res.json(addedWords);
  },

  async getUserWords(req, res) {
    // where the user id matches current user id
    const records = await Word.find({ _id: req.body.userId });

    if (!records) {
      return res.status(400).json({ message: 'Cannot add that word' });
    }
    return res.json(records);
  },
  
  async saveWord({ user, body }, res) {
    console.log('**********************');
    try {
      const updatedUser = await User.findOneAndUpdate(
        { _id: user._id },
        { $addToSet: { savedWords: body } },
        { new: true, runValidators: true },
      );
      return res.json(updatedUser);
    } catch (err) {
      console.log(err);
      return res.status(400).json(err);
    }
  },

  
};
