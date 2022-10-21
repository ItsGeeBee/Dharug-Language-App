const { Schema } = require('mongoose');

// This is a subdocument schema
// it won't become its own model but we'll use it as the schema
// for the User's `AllFavouriteswords` array in User.js
const FavouritesSchema = new Schema(
  {
    word: {
      type: String,
      required: true,
    },
    definition: {
      type: String,
      required: true,
    },
  },
);

module.exports = FavouritesSchema;
