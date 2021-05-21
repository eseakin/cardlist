import React from 'react';

import ListCard from './ListCard';

const List = ({ notes, setActiveNoteId, activeNoteId }) => {
  return (
    <div className="list">
      {notes?.map((note) => 
        <ListCard key={note.id} note={note} setActiveNoteId={setActiveNoteId}  activeNoteId={activeNoteId} />
      )}
      {!notes && <div>Loading...</div>}
    </div>
  );
}

export default List;
