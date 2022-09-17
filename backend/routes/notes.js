const express = require('express');
const { body, validationResult } = require('express-validator');
const fetchuser = require("../middleware/fetchuser")
const Notes = require('../models/Notes')
const router = express.Router();

// ROUTE 1: Get all the Notes using: GET "/api/auth/fetchallnotes". Login require
router.get('/fetchallnotes', fetchuser, async(req,res)=>{
    try {
    const notes = await Notes.find({user: req.user.id})
    console.log(notes);
    
    res.json(notes);
    } catch (error) {
        console.log(error.message)
        res.status(500).send("Internal Server Error ") 
    }
   
})


// ROUTE 2: Add a new Note using: POST "/api/auth/addnote". Login require
router.post('/addnote',
body('title', 'Not be null').exists(), // name of the user is must have minimum 3 character
body('description', 'Enter a valid email').exists(), // Checking is email is email
 fetchuser, async(req,res)=>{

try {
    const  {title,description,tag} = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const note = new Notes({
        title,description,tag
    });

    const savedNote = note.save();
    res.json(savedNote)

} catch (error) {
    console.log(error.message)
    res.status(500).send("Internal Server Error ")  
}

})

module.exports = router