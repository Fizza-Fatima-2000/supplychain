const express = require("express");
const product_router = express.Router();
const { add_product,info_product} = require('../controllers/product.controller')
const  verifyToken = require('../middleware/auth')


product_router.post('/api/add_product' ,[verifyToken], add_product);
product_router.get('/api/info_product' , info_product);



module.exports = product_router;


