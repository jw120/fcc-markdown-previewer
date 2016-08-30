/** @flow
 *
 * Stateless function component that provides the top-level of our application
 *
 */

import React from 'react';
import './App.css'
import Entry from './Entry.js';
import Render from './Render.js';

function App(): React.Element<*> {
  return (
    <div className="App">
      <div className="App-header">
        <h2>Markdown previewer</h2>
      </div>
      <Entry />
      <Render markdown="This is a *test* <p>more</p>"/>
    </div>
  );
}

export default App;
