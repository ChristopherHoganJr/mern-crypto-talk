const Post = require("../models/post.models");

const jwt = require("jsonwebtoken");
const User = require("../models/user.models");
const secret_key = process.env.SECRET_KEY;

module.exports = {
  findAll: (req, res) => {
    Post.find()
      .then((all_posts) => res.json(all_posts))
      .catch((err) => res.status(400).json(err));
  },
  create: (req, res) => {
    var decoded = jwt.verify(req.cookies.user_token, secret_key);
    console.log(decoded);
    const post_data = {
      userId: decoded.id,
      body: req.body.post,
    };
    Post.create(post_data)
      .then((post) => {
        let maybeUser = User.findOneAndUpdate(
          { _id: decoded.id },
          { $push: { posts: post._id } },
          { new: true }
        );
        console.log(maybeUser);
      })
      .then(res.json({ message: "Created new Post", status: 200 }))
      .catch((err) => res.status(400).json(err));
  },
  findOne: (req, res) => {
    Post.findById(req.params.id)
      .then((one_post) => res.json(one_post))
      .catch((err) => res.status(400).json(err));
  },
  update: (req, res) => {
    Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })
      .then((updated_post) => res.json(updated_post))
      .catch((err) => res.status(400).json(err));
  },
  delete: (req, res) => {
    Post.findByIdAndDelete(req.params.id)
      .then((result) => res.json(result))
      .catch((err) => res.status(400).json(err));
  },
};
