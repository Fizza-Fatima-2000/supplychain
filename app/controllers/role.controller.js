const express = require('express')
const app= express()
const{ role} = require('..//models/role');
//const users = require('./user.controller')
//const user =require('../middleware/auth')




//insert role
 
const add_role = async (req, res)=>{
   
    try {
        
    const inserting_role =await new role({
      
      role : req.body.role
      
    })
    let roleadd = await inserting_role.save();
    console.log(inserting_role);
    let helperfunction = () => {
        let response = res.statusCode;
        let messages = "role";
        let Data = roleadd;
        let status = true;
        
        return res.status(201).send({ response: response, message: messages, status: status , Data : Data})
    }


    helperfunction()
  

} catch (error) {
        console.log(error)
        res.send(error);
}
}

 


module.exports = add_role;