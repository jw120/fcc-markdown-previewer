/** @flow
 *
 * Stateless function component to render the text entry box
 *
 */

import React from 'react';
import './Entry.css';

function Entry(): React.Element<*> {
  return (
    <div className="Entry">
      <div className="Entry-header">
        <h3>Enter your text</h3>
      </div>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </div>
  );
}

export default Entry;
