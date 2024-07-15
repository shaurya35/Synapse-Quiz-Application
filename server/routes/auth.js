//express config
const express = require('express');
const router = express.router();

//controller config
const { loginUser, signupUser } = require('../controllers/authController')

//login
router.post('/login', loginUser);

//signup
router.post('/signup', signupUser);

//exporting
module.export = router;
