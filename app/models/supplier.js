const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.Types;
const Schema = mongoose.Schema;

//creating schema of category
const supplier_schema = new mongoose.Schema({
     
    supplier_name: {
        type: String,
        required: true
    }, 
    email :{
        type:String,
        unique: true
    },
supplier_Phoneno :{
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
   pro_id:{
    type: Schema.Types.ObjectId,
        ref: "products"
   }

  
 
   
}


)

//creating collection
const supplier = new mongoose.model('supplier', supplier_schema)


//export collection
module.exports =  supplier ;