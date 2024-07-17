//express config
const express = require("express");
const app = express();

//mongoose config
const mongoose = require("mongoose");

//dotenv config
require("dotenv").config();

//middleware to parse json bodies
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//route config
const adminRoute = require("./routes/admin");
/* const quizRoute = require("./routes/quiz"); */

//get function
app.get("/", (req, res) => {
  res.send("/ route here");
});


//use functions
app.use("/api/v1/admin", adminRoute);
/* app.use("/api/v1/quiz", quizRoute); */

//database connection
mongoose.connect(process.env.MONGO_URI).then(() => {
  app.listen(process.env.PORT, () => {
    console.log(
      `Connected to DB and running on port https://localhost:${process.env.PORT}/`
    );
  });
});

