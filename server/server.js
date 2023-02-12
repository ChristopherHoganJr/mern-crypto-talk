require("dotenv").config();

const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();
app.use(cookieParser());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = process.env.MONGODB_URI;
require("./config/mongoose.config")(db);

// Routes
require("./routes/user.routes")(app);

const port = process.env.PORT;
app.listen(port, () => console.log(`listening on port: ${port}`));
