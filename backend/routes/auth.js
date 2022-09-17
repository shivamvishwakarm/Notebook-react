const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const fetchuser = require("../middleware/fetchuser")
const router = express.Router(); 
const { body, validationResult } = require('express-validator');

const JWT_SECRET = "THISISJWTSECRET"

// ROUTE 1: Create a User using: POST "/api/auth/createuser". No login require
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

    const salt =  bcrypt.genSaltSync(10);
    const securePass =  bcrypt.hashSync(req.body.password, salt); //hashing the password

    // Creating the user 
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
      const authtoken = jwt.sign(data,JWT_SECRET); // signing the authtoken to the user with jwt web token
      res.json({authtoken});

    }
    // In case of any error catch the error
    catch (error){
      console.log(error.message)
      res.status(500).send("Internal Server Error ")
    }
} )



// ROUTE 2: authenticate a User using: POST "/api/auth/login". No login require
router.post('/login',[
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Password can not be blank').exists(),
] , async (req, res)=>{
// If there are errors, return Bad request and the errors
const errors = validationResult(req);
if (!errors.isEmpty()) {
  return res.status(400).json({ errors: errors.array() });
}


const {email,password} = req.body;
try{
  let user = await User.findOne({email}); //finding the email
  if(!user){
    return res.status(400).json({error: "Please try to login with corrent credentials"});
  }

  const passwordcompare = await bcrypt.compare(password,user.password);
  if(!passwordcompare){
    return res.status(400).json({error: "Please try to login with corrent credentials"});
  }
  const payload = {
    user:{
      id:user.id
    }
  }
  const authtoken = jwt.sign(payload,JWT_SECRET);

  res.json({authtoken});
}

catch (error){
  console.log(error.message)
  res.status(500).send("Insternal Server Error ")
}
})


// ROUTE 3: Get loggedin user details: POST "/api/auth/getuser". Login require
router.post('/getuser', fetchuser,  async (req, res) => {

  try {
    userId = req.user.id;
    const user = await User.findById(userId).select("-password"); // finding the user using the user id that got with the help of middleware 'fetchuser'
    res.send(user) // Sending the user detail
  } 
  //In case of any error sending the status code 500 
  catch (error) { 
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
})

// Exporting the routers
module.exports = router