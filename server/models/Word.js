const { Schema, model } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const wordSchema = new Schema(
  
  {
  word: {
    type: String,
    required: true,
    },
  definition: {
    type: String,
    required: true,
  },
  example: {
    type: String,
    required: true,
  },
});

const Word = model('Word', wordSchema);

module.exports = Word;
