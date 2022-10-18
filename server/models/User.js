const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

// import schema from Word.js
const savedSchema = require('./Saved');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true // removes any unnecessary white space either side
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must use a valid email address'], // regex email validator
    },
    password: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now
    },
    // set savedWords to be an array of data that adheres to the savedSchema
    savedWords: [savedSchema],
  },
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// hash user password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// when we query a user, we'll also get another field called `wordCount` with the number of saved books we have
userSchema.virtual('wordCount').get(function () {
  return this.savedWords.length;
});

const User = model('User', userSchema);

module.exports = User;

// module.exports = User = mongoose.model("User", UserSchema);