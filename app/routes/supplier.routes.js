const express = require("express");
const supplier_router = express.Router();
const { add_suplier,info_supplier} = require('../controllers/supplier.controller');
const verifyAdmin = require("../middleware/admin.auth");
const verifyToken = require("../middleware/auth");




supplier_router.post('/api/add_supplier' , [verifyToken , verifyAdmin], add_suplier);
supplier_router.get('/api/info_supplier' , info_supplier);



module.exports = supplier_router;


