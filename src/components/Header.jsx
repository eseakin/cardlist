import React from 'react';

import { ReactComponent as NewNote } from '../icons/add-new-icon.svg';

const Header = (props) => {
  return(
    <div className="header">
      <h3>Forethought Note</h3>
      <NewNote className="new-note" />
    </div>
  );
}

export default Header;
