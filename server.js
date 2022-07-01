// Import dependencies
const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const morgan = require("morgan");

// ENV Variables
const port = process.env.PORT;
const MONGODB_URI = process.env.MDBDB_URI;

// Don't ask
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));

// Set Routes
require("./routes/index.routes")(app);

// Connect to DB and start server
mongoose
  .connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("***Database Connected***");
    app.listen(port, () => {
      console.log(`<<<Server running on ${port}>>>`);
    });
  })
  .catch((err) => console.log("Connection Error: ", err.message));
