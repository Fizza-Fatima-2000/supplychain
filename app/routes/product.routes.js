const express = require("express");
const product_router = express.Router();
const { add_product,info_product} = require('../controllers/product.controller')
const  verifyToken = require('../middleware/auth')
const admin = require('../middleware/admin.auth');
const verifyAdmin = require("../middleware/admin.auth");


product_router.post('/api/add_product',[verifyToken,verifyAdmin],add_product)


module.exports = product_router;


