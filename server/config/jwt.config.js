const jwt = require("jsonwebtoken");

module.exports.authenticate = (req, res, next) => {
  jwt.verify(
    req.cookies.user_token,
    process.env.SECRET_KEY,
    (error, payload) => {
      if (error) {
        res.json({ verified: false });
      } else {
        next();
      }
    }
  );
};
