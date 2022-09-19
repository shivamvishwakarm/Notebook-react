import React,{useState} from "react";
import NoteContext from "./noteContext";

const NoteState = (props)=>{

    const notesInitial = [
        {
          "_id": "6325eb18b1e765a93505d398",
          "title": "My 1Title",
          "description": "This is the defdfsascription",
          "tag": "normal",
          "date": "2022-09-17T15:43:20.900Z",
          "__v": 0
        },
        {
          "_id": "63261428565a52e30ba06b49",
          "title": "Football1",
          "description": "The champion ship",
          "tag": "fitball",
          "date": "2022-09-17T18:38:32.352Z",
          "__v": 0
        },
        {
          "_id": "63261450565a52e30ba06b47",
          "title": "Daily",
          "description": "This is the daily journel 1",
          "tag": "daily",
          "date": "2022-09-17T18:39:12.765Z",
          "__v": 0
        }
        ,
        {
          "_id": "63261428565a52e30ba06b42",
          "title": "Football1",
          "description": "The champion ship",
          "tag": "fitball",
          "date": "2022-09-17T18:38:32.352Z",
          "__v": 0
        },
        {
          "_id": "63261450565a52e30ba06b41",
          "title": "Daily",
          "description": "This is the daily journel 1",
          "tag": "daily",
          "date": "2022-09-17T18:39:12.765Z",
          "__v": 0
        },
        {
          "_id": "63261428565a52e30ba06b43",
          "title": "Football1",
          "description": "The champion ship",
          "tag": "fitball",
          "date": "2022-09-17T18:38:32.352Z",
          "__v": 0
        },
        {
          "_id": "63261450565a52e30ba06b96",
          "title": "Daily",
          "description": "This is the daily journel 1",
          "tag": "daily",
          "date": "2022-09-17T18:39:12.765Z",
          "__v": 0
        },
        {
          "_id": "63261428565a52e30ba06b13",
          "title": "Football1",
          "description": "The champion ship",
          "tag": "fitball",
          "date": "2022-09-17T18:38:32.352Z",
          "__v": 0
        },
        {
          "_id": "63261450565a52e30ba06b46",
          "title": "Daily",
          "description": "This is the daily journel 1",
          "tag": "daily",
          "date": "2022-09-17T18:39:12.765Z",
          "__v": 0
        }
      ]

      const [notes, setNotes] = useState(notesInitial)


      // Add  a Note
      const addNote = (title,description,tag)=>{
        console.log("Adding a new note");
       const note = {
          "_id": "63261450564a52e30ba06b46",
          "title": title,
          "description": description,
          "tag": tag,
          "date": "2022-09-17T18:39:12.765Z",
          "__v": 0
        };
        setNotes(notes.concat(note))
      }
      // Delete a Note
      const deleteNote = (id)=>{
        console.log("note is deleted" + id)
        const newNote = notes.filter((note)=>{return note._id !==id})
        setNotes(newNote);
      }
      // Edit a Note
      const editNote = (id,title,description,tag)=>{


        for (let index = 0; index < notes.length; index++) {
          const element = notes[index];
          if(element.id == id){
            element.title = title;
            element.description = description;
            element.tag = tag;
          }
        }
      }



    return(

        <NoteContext.Provider value={{notes,addNote,deleteNote,editNote }}>
            {props.children}
        </NoteContext.Provider>
    )

}


export default NoteState;