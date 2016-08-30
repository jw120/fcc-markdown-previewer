// @flow

// Stateless function component to display and render the given markdown text

import React from 'react';
import './Render.css';

function Render({ markdown }: { markdown: string}): React.Element<*> {
  return (
    <div className="Render">
      <div className="Render-header">
        <h3>Rendered from Markdown</h3>
      </div>
      <p>XYZ {markdown}</p>
    </div>
  );
}

export default Render;
