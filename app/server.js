const express = require('express');
const app = express();
const bodyparser = require('body-parser');
PORT = process.env.PORT || 7007
require('./config/connectDB');
require('dotenv').config()
const cors = require('cors');
app.use(express.json())
app.use(express.urlencoded({extended:true}));
const user_router = require('./routes/users.routes');
app.use(user_router)

app.use(cors({
    origin: 'http://localhost:3000'}));

app.listen(PORT, () => {
    console.log(`server is start ${PORT}`)
})
