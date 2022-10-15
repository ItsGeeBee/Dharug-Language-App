const { Word } = require('../models');

module.exports = {

async getAllWords({word}, res) {
        const allWords = await Word.find();
        console.log(word);
    if (!allWords) {
        return res.status(400).json({ message: 'Oh no! Misplaced the dictionary!' });
        }
        res.json(allWords);

      },

      addWord(req, res) {
        Word.create(req.body)
          .then((post) => res.json(post))
          .catch((err) => res.status(500).json(err));
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
 