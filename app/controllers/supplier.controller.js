const express = require('express')
const app= express()
const supplier = require('../models/supplier');
const users = require('./user.controller')
const user =require('../middleware/auth')
const { heplerfunction } = require('../utils/helperfunction')

//insert supplier
 
const add_suplier = async (req, res)=>{
    console.log("hello");
    try {
        console.log("hello");
        var user_id = req.user_id;
console.log(user_id);
        const sup = await supplier.findOne( {user_id: user_id})
        if(sup){
            
    const inserting_supplier =await new supplier({
       // user_id: req.user_id,
       user_id: user_id,
        name : req.body.name,
        email: req.body.email
    })
    
    console.log(inserting_supplier);
    return res.status(200).send({ response: 200, message: " Supplier", status: true , Data : inserting_supplier})
}
} catch (error) {
        console.log(error)
        res.send(error);
}

}
 
// get supplier
const info_supplier = async (req, res)=>{
    try {
        
    
    const get_info = await supplier.find()
    return res.status(200).send({ response: 200, message: "All Supplier", status: true , Data : info_supplier})

} catch (error) {
     res.send(error)
}
}



module.exports ={ add_suplier, info_supplier};