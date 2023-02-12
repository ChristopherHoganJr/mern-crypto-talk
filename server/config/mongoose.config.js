require("dotenv").config();
const mongoose = require("mongoose");

module.exports = (db) => {
  mongoose
    .connect(db)
    .then(() => console.log("connected to db"))
    .catch(() => console.log("cannot connect to db"));
};
