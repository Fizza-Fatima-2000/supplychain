const express = require("express");
const product_router = express.Router();
const { add_product,info_product} = require('../controllers/product.controller')



product_router.post('/api/add_product',add_product)
product_router.get('/api/get_product', info_product)



module.exports = product_router;


