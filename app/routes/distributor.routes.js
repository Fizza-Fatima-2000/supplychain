const express = require("express");
const distributor_router = express.Router();
const { add_distributor,info_distributor} = require('../controllers/distributor.controller');
const verifyAdmin = require("../middleware/admin.auth");
const verifyToken = require("../middleware/auth");



distributor_router.post('/api/add_distributor',[verifyToken,verifyAdmin],add_distributor)
distributor_router.get('/api/get_distributor', info_distributor)



module.exports = distributor_router;


