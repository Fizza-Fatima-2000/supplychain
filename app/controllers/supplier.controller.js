const express = require('express')
const app= express()
const supplier = require('../models/supplier');
const users = require('./user.controller')
const user =require('../middleware/auth')
const { heplerfunction } = require('../utils/helperfunction')

//insert supplier
 
const add_suplier = async (req, res)=>{
    try {        
        const {supplier_name, email , supplier_phoneno} = req.body;
    const inserting_supplier =await new supplier({
      
      
       supplier_name ,
        email,
        supplier_phoneno 
    })
     var for_save = await inserting_supplier.save();
         console.log(inserting_supplier);
    return res.status(200).send({ response: 200, message: " Supplier", status: true , Data : for_save})
}
 catch (error) {
        console.log(error)
        res.send(error);
}

}
 
// get supplier
const info_supplier = async (req, res)=>{
    try {
        
    
    const get_info = await supplier.find()
    return res.status(200).send({ response: 200, message: "All Supplier", status: true , Data : get_info})

} catch (error) {
     res.send(error)
}
}



module.exports ={ add_suplier, info_supplier};