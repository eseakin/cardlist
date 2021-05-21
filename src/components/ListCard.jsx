import React from 'react';
import moment from 'moment';

import { ReactComponent as RightChevron } from '../icons/icon-caret-right.svg';

const ListCard = ({ note, setActiveNoteId, activeNoteId }) => {
  const getNoteTitle = (title) => {
    // capitalize first letter
    title = title[0]?.toUpperCase() + title.slice(1);

    // truncate if longer than 30 letters
    title = title.length > 30 ? title?.slice(0, 30) + '...' : title;

    return title;
  }

  return (
    <div key={note.id} onClick={() => setActiveNoteId(note.id)} className={`list-card ${activeNoteId === note.id ? 'active' : ''}`}>
      <div className="list-card-container">
        <h3 className="list-card-title">
          {getNoteTitle(note.title)}
        </h3>
        <div className="list-card-date">{moment(note.date_created).format('MMMM Do, YYYY')}</div>
      </div>
      
      <RightChevron className="right-chevron" />
    </div>
  );
}

export default ListCard;
