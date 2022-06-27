const express = require('express')
const app= express()
const{ role} = require('..//models/role');
//const users = require('./user.controller')
//const user =require('../middleware/auth')
 const { helperfunction }= require('../utils/helperfunction')



//insert role
 
const add_role = async (req, res)=>{
   
    try {
        
    const inserting_role =await new role({
      
      role : req.body.role
      
    })
    let roleadd = await inserting_role.save();
    console.log(inserting_role);
 
        
        return res.status(201).send({ response: 200, message: "roles", status: true , Data : inserting_role})
  

} catch (error) {
        console.log(error)
        res.send(error);
}
}

 


module.exports = add_role;