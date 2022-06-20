const mongoose = require("mongoose");


const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types;
//creating schema of category
const product_schema = new mongoose.Schema({
  pro_name: {
    type: String,
    
  },
  email: {
    type: String,
    unique: true,
  },
  quantity: {
    type: Number,
  },
  items: {
    type: Number,
  },
  type: {
    type: String,
  },
  location: {
    type: String,
  },

 
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
});

//creating collection
const product = new mongoose.model("product", product_schema);

//export collection
module.exports = product;
