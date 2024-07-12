//express and router config
const express = require('express');
const router = express.Router();

//controller config
const {
    getAllquestions
} = require("../controllers/adminController");

router.get("/", (req, res) => {
    res.send("admin here")
});


