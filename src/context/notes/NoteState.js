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
          "_id": "63261428565a52e30ba06b43",
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
        ,
        {
          "_id": "63261428565a52e30ba06b43",
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
          "_id": "63261450565a52e30ba06b46",
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
          "_id": "63261450565a52e30ba06b46",
          "title": "Daily",
          "description": "This is the daily journel 1",
          "tag": "daily",
          "date": "2022-09-17T18:39:12.765Z",
          "__v": 0
        }
      ]

      const [notes, setNotes] = useState(notesInitial)

    return(

        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )

}


export default NoteState;