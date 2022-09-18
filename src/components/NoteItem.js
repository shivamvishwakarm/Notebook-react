import React from 'react'

export const NoteItem = (props) => {

    const { title, description, tag, date } = props.note;

    return (
        <div className="col-md-3">
            <div class="card my-3">
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">{description}</p>
                </div>
            </div>
        </div>

    )
}
