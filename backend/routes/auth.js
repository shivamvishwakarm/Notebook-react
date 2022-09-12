const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router(); 
const { body, validationResult } = require('express-validator');


const JWT_SECRET = "THISISJWTSECRET"

// Create a User using: POST "/api/auth/createuser". No login require
router.post('/createuser',[
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be atleast 5 characters').isLength({ min: 5 }),
] , async (req, res)=>{ 
  // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //check whether the user with this email exists already 

    try{

    let user = await User.findOne({email:req.body.email});
    if(user){
      return res.status(400).json({error: "sorrry a user with this email already exists"});
    }

    const salt = await bcrypt.genSaltSync(10);
    const securePass = await bcrypt.hashSync(req.body.password, salt);

    user = await User.create({
        name: req.body.name,
        password: securePass,
        email: req.body.email,
      });
    
      const data = {
        user:{
          id : user.id
        }
      }
      const authtoken = jwt.sign(data,JWT_SECRET);
      res.json({authtoken});

    }
    catch (error){
      console.log(error.message)
      res.status(500).send("Some Error occured")
    }
} )

module.exports = router