// import user model
const { User } = require("../models");
const { Word } = require("../models");
const { checkout } = require("../routes/api/user-routes");
var ObjectId = require("mongoose").Types.ObjectId;
// import sign token function from auth
const { signToken } = require("../utils/auth");
const stripe = require("stripe")(process.env.STRIPE_KEY);

module.exports = {

  // GET all users, for admin use only
  async getAllUsers({ user }, res) {
    const allUsers = await User.find();

    if (!allUsers) {
      return res.status(400).json({ message: "Oh no!!" });
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
        .json({ message: "Cannot find a user with this id!" });
    }

    res.json(foundUser);
  },
  // create a user, sign a token, and send it back (to client/src/components/SignUpForm.js)
  async createUser({ body }, res) {
    const user = await User.create(body);

    if (!user) {
      return res.status(400).json({ message: "Something is wrong!" });
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
      return res.status(400).json({ message: "Sorry no user was found" });
    }

    const correctPw = await user.isCorrectPassword(body.password);

    if (!correctPw) {
      return res.status(400).json({ message: "Whoops, Wrong password!" });
    }
    const token = signToken(user);
    res.json({ token, user });
  },

  // GET words that a specifc user has entered
  async getUserWords(req, res) {
    // where the user id matches current user id
    const records = await Word.find({ user: req.params.id });

    if (!records) {
      return res.status(400).json({ message: "Sorry, find that word" });
    }
    return res.json(records);
  },


  // POST a new word to the Word schema 
  async addWord(req, res) {
    const addedWords = await Word.create({
      ...req.body,
      user: req.params.userId,
    });

    if (!addedWords) {
      return res
        .status(400)
        .json({ message: "Sorry, We cannot add that word" });
    }
    return res.json(addedWords);
  },

  //PUT request to update selected word to edit 
  async editWord(req, res) {
    const record = await Word.findByIdAndUpdate(
      req.params.wordId,
      {
        ...req.body,
        user: req.params.userId,
      },
      { new: true }
    );

    if (!record) {
      return res
        .status(400)
        .json({ message: "Sorry, We cannot edit that word!" });
    }
    return res.json(record);
  },

  // DELETE word from Word schema
  async deleteWord(req, res) {
    const records = await Word.deleteOne({ _id: req.params.wordId });

    if (!records) {
      return res
        .status(400)
        .json({ message: "Sorry, We cannot delete that word!" });
    }
    return res.json(records);
  },


  // PUT request to add word from dictionary to FavouriteWords
  async addFavourite(req, res) {
    try {
      const updatedUser = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: { FavouriteWords: req.body } },
        { new: true, runValidators: true }
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
      { new: true }
    );
    if (!updatedUser) {
      return res
        .status(404)
        .json({ message: "Sorry, no users were found with that id!" });
    }
    return res.json(updatedUser);
  },

  // GET all users favouriate words on dashboard load 
  async getFavouriteWords(req, res) {
    const updatedUser = await User.findOne({ _id: req.params.userId }).populate(
      { path: "FavouriteWords" }
    );
    if (!updatedUser) {
      return res
        .status(404)
        .json({ message: "Sorry, no users were found with that id!" });
    }
    return res.json(updatedUser.FavouriteWords);
  },

  // stripe payment function
  async checkout(req, res) {
    console.log("trying to checkout")
    const url = new URL(context.headers.referer).origin;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: { price: 5, quantity: 1 },
      mode: "payment",
      success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${url}/`,
    });
console.log(session)
    return res.status(200).json({ session: session.id });
  },
};
