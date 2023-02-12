const User = require("../controllers/user.controllers");
const { authenticate } = require("../config/jwt.config");

module.exports = (app) => {
  app.post("/api/users/register", User.register);
  app.post("/api/users/login", User.login);
  app.get("/api/users/logout", User.logout);
};
