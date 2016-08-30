// @flow

// Component to display and render the given markdown text

import React from 'react';
import './Render.css';

function Render(markdown: string): React.Element<string> {
  return (
    <div className="Render">
      <div className="Render-header">
        <h3>Rendered from Markdown</h3>
      </div>
      <p>XYZ</p>
    </div>
  );
}

export default Render;
