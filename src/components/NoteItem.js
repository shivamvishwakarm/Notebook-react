import React,{ useContext } from 'react';
import noteContext from "../context/notes/noteContext";


export const NoteItem = (props) => {

    const context = useContext(noteContext);
    const {deleteNote} = context;

    const { title,description,_id } = props.note;

    



    return (
        <div className="col-md-3">
            <div className="card my-3">
                <div className="card-body">
                    <div className="d-flex align-item-center">
                        <h5 className="card-title">{title}</h5>
                        <i className="fa fa-edit mx-2" ></i>
                        <i className="fa fa-trash-alt mx-2" onClick={()=>{deleteNote(_id)}}></i>
                    </div>
                        <p className="card-text">{description}</p>
                </div>
            </div>
        </div>


    )
}
