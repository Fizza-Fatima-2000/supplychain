const express = require("express");
const role_router = express.Router();
const add_role = require("../controllers/role.controller");




role_router.post('/api/inserting_role'  , add_role)


module.exports = role_router;


