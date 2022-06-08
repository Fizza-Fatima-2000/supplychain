const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//creating schema of category
const users_schema = new mongoose.Schema({
    
    name: {
        type: String,
        required: true
    }, 
    email :{
        type:String,
        unique: true
    },
    password :{
        type : String,
        required: true,
    },
    phoneno :{
        type : String
    },
    token: {
        type: String
    },
    role: {
        type: Schema.Types.ObjectId,
        

        ref: "roles"
   },
})

//creating collection
const users = new mongoose.model('users', users_schema)


//export collection
module.exports =  users ;