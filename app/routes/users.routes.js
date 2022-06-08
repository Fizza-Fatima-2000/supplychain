const express = require("express");
const user_router = express.Router();
const {Signup , signIn} = require("../controllers/users.controller")

const { checkMissingField ,checkDuplicateEmail } = require("../middleware//sign_up.validate");


user_router.post('/api/User_Signup' ,  [checkDuplicateEmail , checkMissingField ] , Signup)
user_router.post('/api/User_Signin' , signIn)

module.exports = user_router;


