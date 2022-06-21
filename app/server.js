const express = require('express');
const app = express();
const bodyparser = require('body-parser'); //body-parser is an npm library used to process data sent through an HTTP request body
PORT = process.env.PORT || 7007 //port define
require('./config/connectDB');
require('dotenv').config()
const cors = require('cors');
app.use(cors({
    origin:'http://localhost:3000'}));
    app.use(bodyparser.urlencoded({
        limit: '500mb',
        parameterLimit: 100000,
        extended: true
    }));
app.use(express.json()) 
app.use(express.urlencoded({extended:true}));
const user_router = require('./routes/users.routes');
const supplier_router=require('./routes/supplier.routes')
const product_router=require('./routes/product.routes');
const role_routers = require('./routes/role.routes');
app.use([user_router,supplier_router, product_router , role_routers])



app.listen(PORT, () => {
    console.log(`server is start ${PORT}`)
})
