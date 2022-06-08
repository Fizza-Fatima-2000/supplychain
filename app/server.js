const express = require('express');
const app = express();
const bodyparser = require('body-parser');
PORT = process.env.PORT || 7007
require('./config/connectDB');
require('dotenv').config()

app.use(express.json())
app.use(express.urlencoded({extended:true}));
const user_router = require('./routes/users.routes');
app.use(user_router)



app.listen(PORT, () => {
    console.log(`server is start ${PORT}`)
})
