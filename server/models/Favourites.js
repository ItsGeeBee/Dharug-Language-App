const { Schema, Types } = require('mongoose');

// This is a subdocument schema
// it won't become its own model but we'll use it as the schema
// for the User's `AllFavouriteswords` array in User.js
const FavouritesSchema = new Schema(
  {
    wordId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    word:
    {
      required: true,
      type: String,
    },
    definition: {
      type: String,
      required: true,
    },
  },
);

module.exports = FavouritesSchema;
