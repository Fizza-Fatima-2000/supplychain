const express = require('express')
const app= express()
const supplier = require('../models/supplier');
const users = require('./user.controller')
const user =require('../middleware/auth')
//hepling function
const returnFunction = (resCode,msg,Status,data,res) => {
    let response = resCode;
    let messages = msg;
    let status = Status;
    let Data = data;
    return res.status(resCode).send({ response: response, message: messages, status: status, Data: Data })
}


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
    returnFunction(200,"Supplier",true , inserting_supplier)
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
    returnFunction(200,"Supplier",true , get_info, res )

} catch (error) {
     res.send(error)
}
}



module.exports ={ add_suplier, info_supplier};