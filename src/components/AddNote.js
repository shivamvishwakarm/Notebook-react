import React,{ useContext } from 'react';
import { useState } from 'react';
import noteContext from "../context/notes/noteContext";

export const AddNote = () => {

  
  const context = useContext(noteContext);
  const {addNote} = context

  const [note, setNote] = useState({title:"", description:"", tag:"default"});



const onChange = (e)=>{
  setNote({...note, [e.target.name]: e.target.value});
  // console.log(e.target.value)
 
}

const handleClick = (e)=>{
  e.preventDefault();
  addNote(note.title, note.description, note.tag);
}







  return (
    <form className='my-4'>
  <div className="mb-3">
    <label htmlFor="title"  className="form-label">Title</label>
    <input type="text" className="form-control" name="title" id="title" aria-describedby="emailHelp" onChange={onChange}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="description" className="form-label">description</label>
    <input type="text" className="form-control" name='description' id="description" onChange={onChange}/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary" onClick={handleClick}>Submit</button>
</form>
  )
}


