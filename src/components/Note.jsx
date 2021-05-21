import React, { useState, useEffect } from 'react';

import { ReactComponent as Delete } from '../icons/delete-bttn.svg';

const Note = ({ note, onDeleteNote, onSaveNote }) => {
  const [title, setTitle] = useState(note?.title ?? '');
  const [content, setContent] = useState(note?.content ?? '');

  useEffect(() => {
    setTitle(note?.title ?? '');
    setContent(note?.content ?? '');
  }, [note]);

  // run on save
  const capitalize = (str) => {
    if(!str) return '';

    // capitalize first letter
    str = str[0]?.toUpperCase() + str.slice(1);

    return str;
  }

  const saveNote = (id) => {
    const newTitle = capitalize(title);
    const newContent = capitalize(content);
    const newNote = { ...note, title: newTitle, content: newContent };
    onSaveNote(newNote);
  };

  return (
    <div className="note">
      <div className="note-header">
        <div className="title-input">
          <input value={title} onChange={(e) => setTitle(e.target.value)} onBlur={() => saveNote(note.id)} />
        </div>
        <Delete className="delete-button" onClick={() => onDeleteNote(note?.id)} />
      </div>
      <textarea className="content-input" value={content} onChange={(e) => setContent(e.target.value)} onBlur={() => saveNote(note.id)} />
    </div>
  );
}

export default Note;
