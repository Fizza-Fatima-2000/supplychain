const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.Types;
const Schema = mongoose.Schema;

//creating schema of category
const  distributor_schema = new mongoose.Schema({
     
    distributor_name: {
        type: String,
        required: true
    }, 
    distributor_email :{
        type:String,
        unique: true
    },
    distributor_Phoneno :{
    type: String
},

   
    // phoneno :{
    //     type : String
    // },
   token:{
    type:String
   },
    user_id: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },

  
 
   
}


)

//creating collection
const  distributor = new mongoose.model('distributor',  distributor_schema)


//export collection
module.exports = distributor ;