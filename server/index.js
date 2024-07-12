//express config
const express = require('express');
const app = express();

//dotenv config
require('dotenv').config();

//route config
const adminRoute = require("./routes/admin");
const quizRoute = require("./routes/user");

//use functions 
app.use("/api/v1/admin", adminRoute);
app.use("/api/v1/quiz", quizRoute);

//database connection
mongoose
.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(process.env.PORT,() => {
        console.log(`Connected to DB and running on port https://localhost:${process.env.PORT}`)
    })
})