const express = require('express');
const { body, validationResult } = require('express-validator');
const fetchuser = require("../middleware/fetchuser")
const Notes = require('../models/Notes')
const router = express.Router();

// ROUTE 1: Get all the Notes using: GET "/api/notes/fetchallnotes". Login require
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Notes.find({ user: req.user.id })
        console.log(notes);

        res.json(notes);
    } catch (error) {
        console.log(error.message)
        res.status(500).send("Internal Server Error ")
    }

})


// ROUTE 2: Add a new Note using: POST "/api/notes/addnote". Login require
router.post('/addnote',
    body('title', 'Not be null').exists(), // name of the user is must have minimum 3 character
    body('description', 'Enter a valid email').exists(), // Checking is email is email
    fetchuser, async (req, res) => {

        try {
            const { title, description, tag } = req.body;
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            const note = new Notes({
                title, description, tag
            });

            const savedNote = note.save();
            res.json(savedNote)

        } catch (error) {
            console.log(error.message)
            res.status(500).send("Internal Server Error ")
        }

    });



// ROUTE 3: Upadate an existing Note using: PUT "/api/notes/updatenote". Login require


router.put('/updatenote/:id', fetchuser, async (req, res) => {

    const {title, description, tag} = req.body;
    // Create a newNote object
    const newNote  = {};
    if(title){newNote.title = title};
    if(description){newNote.description = description};
    if(tag){newNote.tag = tag};

    // Find the note to be updated and update it
    let note = await Notes.findById(req.params.id);
    if(!note){return res.status(404).send("Not Found")}


    console.log("this is note id " + note.id)
    console.log("this is user id " + req.user.id)


    if(note.id !== req.user.id){ // here is error occur
        return res.status(401).send("Not Allowed");
    }

    note = await Notes.findByIdAndUpdate(req.params.id, {$set: newNote}, {new:true})
    res.json({note});

    });


    // ROUTE 4: Deleting an existing Note using: DELETE "/api/notes/deletenote". Login require


router.delete('/deletenote/:id', fetchuser, async (req, res) => {

    // Find the note to be deleted and delete it
    let note = await Notes.findById(req.params.id);
    if(!note){return res.status(404).send("Not Found")}


    // Allow deletion only if the user own this note
    if(note.id !== req.user.id){ // here is error occur
        return res.status(401).send("Not Allowed");
    }

    note = await Notes.findByIdAndDelete(req.params.id);
    res.json({Success: "Note has been deleted", note: note});

    })
module.exports = router