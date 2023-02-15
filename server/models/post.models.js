const mongoose = require("mongoose");

const PostSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    body: {
      type: String,
      required: [true, "your post must have text"],
      minlength: [10, "post needs to have at least 10 characters"],
      maxlength: [100, "post must have less than 100 characters"],
    },
  },
  { timestamp: true }
);

const Post = mongoose.model("Post", PostSchema);
module.exports = Post;
