const express = require('express');
const  users  = require("../models/user");
const app = express();
require("dotenv").config();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { role } = require('../models/role')
const helperFunction = require('../utils/helperfunction');
const { ObjectId } = require('mongodb');


//for sign up
const Signup = async (req, res) => {
  //console.log(req.body.name);
  try {
      const {name,email,phoneno,password}=req.body
      const adduser = await new users({

        name,
        email,
        phoneno,
        password
        //type: "User"
       // role : req.body.role
      }); 

console.log(adduser);
      
       var encryptedPassword = await bcrypt.hash(adduser.password, 10);
       adduser.password = encryptedPassword;
      adduser.role = "62b243bff95f821643170749"
      // adduser.type ="Users"
       let insertuser = await adduser.save();
       console.log(insertuser);
      
      const token = jwt.sign(
          { email: adduser.email, phoneno: adduser.phoneno, _id: adduser._id },
         //  "hardcodedTOKEN_KEY",
         "process.env.TOKEN_KEY",
          {
              expiresIn: "24h",
          }
      );

      var tokens = token;

      return res.status(200).send({ response: 200 , message: "Sign-up Successfully", status: true , Data :[adduser , token]})
    

  } catch (e) {
      console.log(e)
      res.status(400).send(e)
  }
}





//Sign In
const signIn = async (req, res) => {


  try {
      const { email, phoneno, password } = req.body;

      if (!(email || phoneno && password)) {
          return res.status(400).send("All input is required");
      }

      const user = await users.findOne({ $or: [{ email: email }, { phoneno: phoneno }] });

      console.log(user);
      if (user && (await bcrypt.compare(password, user.password))) {
          console.log("sign in");

          console.log(user.role)
          if (user.role.equals(ObjectId("62b240c7f905ca0b6de0a5ca")))  {
            const token = jwt.sign(
              { _id: user._id, email: user.email, phoneno: user.phoneno,role:user.role },
              process.env.TOKEN_KEY, {
                expiresIn: "1d",
            }
              
          );
          var tokens = token;
          return res.status(200).send({ response: 200 , message: "Login Successfully", status: true , Data : user.name , token})
          // user
        }
        else{
          return res.status(200).send({ response: 406 , message: "Can't Login, Only Admin access", status: false })

         // return Function(406,"Can't Login, Only Admin access",false,null,res)
        }


          // if(email || phoneno && password){
          
          
          //}
          
         

      }
      else{
        return res.status(400).send("Invalid Credentials");
      }
  } catch (err) {
      console.log(err);
  }
}

module.exports={ Signup , signIn} ;
