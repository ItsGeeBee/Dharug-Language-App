const { Schema, model } = require('mongoose');
// eslint-disable-next-line no-unused-vars
const FavouriteSchema = require('./Favourites');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for
// the User's `AllFavouritesBooks` array in User.js

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
    // consider changing from object to array that houses user object
    user:
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
  },
  {
    toJSON: {
      virtuals: true,
    },
  },
);

const Word = model('Word', wordSchema);

module.exports = Word;
