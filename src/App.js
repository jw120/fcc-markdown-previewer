// @flow

// Top-level React component

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
      <Render markdown="This is a *test*"/>
    </div>
  );
}

export default App;
