// import user model
const { User } = require('../models');
const { Word } = require('../models');
var ObjectId = require('mongoose').Types.ObjectId;
// import sign token function from auth
const { signToken } = require('../utils/auth');

module.exports = {
  async getAllUsers({ user }, res) {
    const allUsers = await User.find();

    if (!allUsers) {
      return res.status(400).json({ message: 'Oh no!!' });
    }
    res.json(allUsers);
  },
  // get a single user by either their id or their username
  async getSingleUser({ user = null, params }, res) {
    const foundUser = await User.findOne({
      $or: [
        { _id: user ? user._id : params.id },
        { username: params.username },
      ],
    });

    if (!foundUser) {
      return res
        .status(400)
        .json({ message: 'Cannot find a user with this id!' });
    }

    res.json(foundUser);
  },
  // create a user, sign a token, and send it back (to client/src/components/SignUpForm.js)
  async createUser({ body }, res) {
    const user = await User.create(body);

    if (!user) {
      return res.status(400).json({ message: 'Something is wrong!' });
    }
    const token = signToken(user);
    res.json({ token, user });
  },
  // login a user, sign a token, and send it back (to client/src/components/SignIn.js)
  // {body} is destructured req.body
  async login({ body }, res) {
    const user = await User.findOne({
      $or: [{ username: body.username }, { email: body.email }],
    });
    if (!user) {
      return res.status(400).json({ message: 'Sorry no user was found' });
    }

    const correctPw = await user.isCorrectPassword(body.password);

    if (!correctPw) {
      return res.status(400).json({ message: 'Whoops, Wrong password!' });
    }
    const token = signToken(user);
    res.json({ token, user });
  },

  // user comes from `req.user` created in the auth middleware function
  async getUserWords(req, res) {
    // where the user id matches current user id
    const records = await Word.find({ user: req.params.id });

    if (!records) {
      return res.status(400).json({ message: 'Sorry, find that word' });
    }
    return res.json(records);
  },

  async addWord(req, res) {
    const addedWords = await Word.create({
      ...req.body,
      user: req.params.userId,
    });

    if (!addedWords) {
      return res.status(400).json({ message: 'Sorry, We cannot add that word' });
    }
    return res.json(addedWords);
  },

  async editWord(req, res) {
    const record = await Word.findByIdAndUpdate(
      req.params.wordId,
      {
        ...req.body,
        user: req.params.userId,
      },
      { new: true },
    );

    if (!record) {
      return res.status(400).json({ message: 'Sorry, We cannot edit that word!' });
    }
    return res.json(record);
  },

  async deleteWord(req, res) {
    const records = await Word.deleteOne({ _id: req.params.wordId });

    if (!records) {
      return res.status(400).json({ message: 'Sorry, We cannot delete that word!' });
    }
    return res.json(records);
  },

  async addFavourite(req, res) {
    try {
      const updatedUser = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: { FavouriteWords: req.body } },
        { new: true, runValidators: true },
      );

      return res.json(updatedUser);
    } catch (err) {
      console.log(err);
      return res.status(400).json(err);
    }
  },

  // remove a word from `Favouritewords`
  async deleteFavourite(req, res) {
    const updatedUser = await User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { FavouriteWords: { _id: req.params.wordId } } },
      { new: true },
    );
    if (!updatedUser) {
      return res
        .status(404)
        .json({ message: 'Sorry, no users were found with that id!' });
    }
    return res.json(updatedUser);
  },

  async getFavouriteWords(req, res) {
    const updatedUser = await User.findOne(
      { _id: req.params.userId })
      .populate({path: 'FavouriteWords'})
    if (!updatedUser) {
      return res
        .status(404)
        .json({ message: 'Sorry, no users were found with that id!' });
    }
    return res.json(updatedUser.FavouriteWords);
  },

};