const express = require('express')
const app= express()
const product = require('../models/product');
//const users = require('./user.controller')
//const user =require('../middleware/auth')




//insert supplier
 
const add_product = async (req, res)=>{
   var user_id = req.user_.id;
    try {
        const finding = await product.findOne({user_id: user_id})
        if(finding){
    const inserting_product =await new product({
      
       pro_name : req.body.pro_name,
        email: req.body.email,
        quantity : req.body.quantity,
        items : req.body.items,
        location : req.body.location,
        type : req.body.type
    })
    let insertproduct = await inserting_product.save();
    console.log(inserting_product);
    let helperfunction = () => {
        let response = res.statusCode;
        let messages = "prodct";
        let Data = {insertproduct}
        let status = true;
        
        return res.status(201).send({ response: response, message: messages, status: status , Data : Data})
    }
}

    helperfunction()
  

} catch (error) {
        console.log(error)
        res.send(error);
}
}

 
// get supplier
const info_product = async (req, res)=>{
    try {
        
    
    const get_info = await product.find({})
    let helperfunction = () => {
        let response = res.statusCode;
        let messages = "prodct";
        let Data = {get_info}
        let status = true;
        
        return res.status(201).send({ response: response, message: messages, status: status , Data : Data})
    }

    helperfunction()
  

} catch (error) {
     res.send(error)
}
}



module.exports ={ add_product, info_product};