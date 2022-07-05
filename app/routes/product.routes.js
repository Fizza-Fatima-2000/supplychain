const express = require("express");
const product_router = express.Router();
const { add_product,info_product} = require('../controllers/product.controller');
const verifyAdmin = require("../middleware/admin.auth");
const verifyToken = require("../middleware/auth");



product_router.post('/api/add_product',[verifyToken,verifyAdmin],add_product)
product_router.get('/api/get_product',[verifyToken,verifyAdmin], info_product)



module.exports = product_router;


