const mongoose = require('mongoose');
const { Schema } = mongoose;


const NotesSchema = new Schema({ 

    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    tag:{
        type: String,
        dafault: 'General'
    },
    date:{
        type: Date,
        default: Date.now
    }
 })

 module.exports = mongoose.model('notes', NotesSchema);