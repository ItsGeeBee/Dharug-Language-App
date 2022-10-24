const { Word } = require('../models');
const { signToken } = require('../utils/auth');

module.exports = {

  async getAllWords({ word }, res) {
    const allWords = await Word.find();

    if (!allWords) {
      return res.status(400).json({ message: 'Oh no! Misplaced the dictionary!' });
    }
    res.json(allWords);
  },


  async getRandomWord(req, res) {
    
    const word = await Word.aggregate(
      [{ $sample: {size:1}}]

    )
    if (!word) {
      return res.status(400).json({ message: 'Cannot find random word' });
    }
    res.json(word);
  },
};
