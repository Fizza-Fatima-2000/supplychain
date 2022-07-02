const express = require('express');
const  users  = require("../models/user");
const app = express();
require("dotenv").config();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { role } = require('../models/role')


//for sign up
const Signup = async (req, res) => {
  console.log(req.body.name);
  try {

      const adduser = await new users({

        name : req.body.name,
        email : req.body.email,
        phoneno : req.body.phoneno,
        password : req.body.password,
      //  type: req.body.type,
       // role : req.body.role
      }); 

console.log(adduser);
      
       var encryptedPassword = await bcrypt.hash(adduser.password, 10);
       adduser.password = encryptedPassword;
      adduser.role = "62b243bff95f821643170749"
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

      let helperfunction = () => {
          let response = res.statusCode;
          let messages = "Sign-up Successful";
          let Data = {adduser , tokens}
          let status = true;
          
          return res.status(201).send({ response: response, message: messages, status: status , Data : Data})
      }

      helperfunction()
    

  } catch (e) {
      console.log(e)
      res.status(400).send(e)
  }
}



//sign in


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


          if (req.body.type == "admin") {
            const checking = await role.findOne({
                _id: user.role
            })
            if (checking.role != admin) {
                returnFunction(406,"Can't Login, Only Admin access",false,null,res)
             
            }
        }

          // if(email || phoneno && password){
          const token = jwt.sign(
              { _id: user._id, email: user.email, phoneno: user.phoneno },

              // "hardcodedTOKEN_KEY",
             "process.env.TOKEN_KEY",

              {
                  expiresIn: "24h",
              }
              
          );
          
          //}
          var tokens = token;

          // user
          let helperfunction = () => {
              let response = res.statusCode;
              let messages = "Login Successful ";
              let status = true;
              let Data = { name: user.name,tokens };
              return res.status(200).send({ response: response, message: messages, status: status, Data: Data })
          }

          helperfunction()
          // return res.status(200).json(tokens);


      }

      return res.status(400).send("Invalid Credentials");
  } catch (err) {
      console.log(err);
  }
}

module.exports={ Signup , signIn} ;
