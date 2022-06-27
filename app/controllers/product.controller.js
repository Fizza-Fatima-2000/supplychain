const express = require('express')
const app= express()
const product = require('../models/product');

const { helperfunction }= require('../utils/helperfunction');



//insert supplier
 
const add_product = async (req, res)=>{
  // var user_id = req.user_.id;
    try {
      //  const finding = await product.findOne({user_id: user_id})
       // if(finding){
    const inserting_product =await new product({
      
       pro_name : req.body.pro_name,
        email: req.body.email,
        quantity : req.body.quantity,
        items : req.body.items,
        location : req.body.location,
        type : req.body.type
    })
    var forsave = await inserting_product.save();

        
        return res.status(200).send({ response: 200 , message: "product added", status: true , Data : forsave})
    }
//}

 

catch (error) {
        console.log(error)
        res.send(error);
}
}

 
// get supplier
const info_product = async (req, res)=>{
    try {
        
    
    const get_info = await product.find({})
   console.log(get_info);
        
       // return res.status(201).send({ response: response, message: " All Product", status: status , Data : { get_info}})
        return res.status(200).send({ response:200, message: " All Product", status: true  , Data: get_info});


} catch (error) {
     res.send(error)
}
}



module.exports ={ add_product, info_product};