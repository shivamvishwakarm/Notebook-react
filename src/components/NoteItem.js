import React from 'react'

export const NoteItem = (props) => {

    const { title, description, tag, date } = props.note;

    return (
        <div className="col-md-3">
            <div class="card my-3">
                <div class="card-body">
                    <div className="d-flex align-item-center">
                        <h5 class="card-title">{title} </h5>
                        <i class="fa fa-edit mx-2 "></i>
                        <i class="fa fa-trash-alt mx-2"></i>
                    </div>
                        <p class="card-text">{description}</p>
                </div>
            </div>
        </div>


    )
}
