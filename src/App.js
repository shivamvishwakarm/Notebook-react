import React from 'react';
import './App.css';
// import ReactDOM from "react-dom/client";
import {Routes,
  Route
} from "react-router-dom";
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { About } from './components/About';
import NoteState from './context/notes/NoteState';

function App() {
  return (
    <>
   <NoteState>
    <Navbar/>
    <div className="container">
    <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/about" element={<About/>} />
    </Routes>
    </div>
    </NoteState>
    </>
  );
}

export default App;
