import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Header from './components/Header';
import List from './components/List';
import Note from './components/Note';

import './App.css';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [activeNoteId, setActiveNoteId] = useState(null);

  const getData = () => {
    axios.get('https://forested-crystalline-bonobo.glitch.me/')
      .then((response) => console.log(response.data) || response.data)
      .then((data) => {
        console.log('data fetched!')
        setNotes(data);
        setActiveNoteId(data[0]?.id);
      })
      .catch(console.log);
  }

  useEffect(() => {
    getData();
  }, []);

  const handleSaveNote = (note) => {
    axios.put(`https://forested-crystalline-bonobo.glitch.me/${note.id}`, note)
      .then(console.log)
      .then(getData)
      .catch(console.log)
  };

  const handleDeleteNote = (id) => {
    if(!id) throw new Error('No id found!');

    axios.delete(`https://forested-crystalline-bonobo.glitch.me/${id}`)
      .then(console.log)
      .then(getData)
      .catch(console.log)
  }

  return (
    <div className="app">
      <div className="left-container">
        <Header />
        <List notes={notes} setActiveNoteId={setActiveNoteId} activeNoteId={activeNoteId} />
      </div>
      <div className="right-container">
        <Note 
          note={notes?.find((note) => note.id === activeNoteId)} 
          onSaveNote={handleSaveNote} 
          onDeleteNote={handleDeleteNote}
        />
      </div>
    </div>
  );
}

export default App;
