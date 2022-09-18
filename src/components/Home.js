import React from 'react'
import { Form } from './Form'
import { Notes } from './Notes'


export const Home = () => {


  return (
   <div className="container my-4">
    <h2>Add a note</h2>

    <Form/>
    <Notes/>
   </div>
  )
}
