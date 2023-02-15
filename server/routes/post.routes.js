const Post = require("../controllers/post.controllers");

module.exports = (app) => {
  app.post("/api/posts", Post.create);
};
