const express = require('express')
const app= express()
const distributor = require('../models/distributor');

const { helperfunction }= require('../utils/helperfunction');



//insert  distributor
 
const add_distributor = async (req, res)=>{
    try {
    const inserting_distributor =await new  distributor({
      
        distributor_name : req.body.distributor_name,
        distributor_email : req.body.distributor_email,
        distributor_phoneno : req.body.distributor_phoneno
       
    })
    var forsave = await inserting_distributor.save();

        
        return res.status(200).send({ response: 200 , message: " distributor added", status: true , Data : forsave})
    }
catch (error) {
        console.log(error)
        res.send(error);
}
}

 
// get distributor
const info_distributor = async (req, res)=>{
    try {
        
    
    const get_info = await distributor.find({})
   console.log(get_info);
        
       // return res.status(201).send({ response: response, message: " All Product", status: status , Data : { get_info}})
        return res.status(200).send({ response:200, message: " All distributor", status: true  , Data: get_info});


} catch (error) {
     res.send(error)
}
}



module.exports ={ add_distributor, info_distributor};