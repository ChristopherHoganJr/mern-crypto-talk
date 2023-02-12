const User = require("../models/user.models");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const secret_key = process.env.SECRET_KEY;

module.exports = {
  register: async (req, res) => {
    // check if email is already in db
    let does_exist = await User.findOne({ email: req.body.email });
    // if email already in db
    if (does_exist) {
      // user can not sign up with email again
      res.status(400).json({ error: "User already exists" });
    }
    // if email is not in db
    else {
      // create a user in db
      User.create(req.body)
        // then take the user information
        .then((user) => {
          // use the user's id to create a web tokoen
          const user_token = jwt.sign(
            {
              id: user._id,
            },
            secret_key,
            { expiresIn: "7d" }
          );
          // respond to the client with an access cookie
          res
            .cookie("usertoken", user_token, secret_key, {
              httpOnly: true,
            })
            .json({ message: "success", user: user });
        })
        // if an error happens - explain error
        .catch((error) => res.json(error));
    }
  },
  login: async (req, res) => {
    // find the user information by email
    const user = await User.findOne({ email: req.body.email });
    // if email was not found - cant log in
    if (!user) return res.status(400).json({ message: "Email not found" });
    // check if password is correct
    const correct_password = await bcrypt.compare(
      req.body.password,
      user.password
    );
    // if password does not match encrypted password
    if (!correct_password)
      return res.status(400).json({ error: "password does not match" });
    // if password does match - create user web token
    const user_token = jwt.sign(
      {
        id: user._id,
      },
      secret_key,
      { expiresIn: "7d" }
    );
    // respond to client with an access cookie
    res
      .cookie("usertoken", user_token, secret_key, {
        httpOnly: true,
      })
      .json({ message: "success", user: user });
  },
  logout: (req, res) => {
    res.clearCookie("usertoken");
    res.sendStatus(200).json({ message: "successfully logged out" });
  },
};
