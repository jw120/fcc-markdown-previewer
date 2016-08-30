/** @flow
 *
 * Stateless function component to display and render the given markdown text
 *
 * Technique to add html into a react component is taken from
 *   https://facebook.github.io/react/tips/dangerously-set-inner-html.html
 *
 */

import React from 'react';
import './Render.css';
import marked from 'marked';

const markedOptions = {
  sanitize: true, // don't pass-through any html in the input
  smartypants: true // try and convert quotes and dashes to be typographically correct
};

function Render({ markdown }: { markdown: string}): React.Element<*> {

  let renderedMarkdown = { __html: marked(markdown, markedOptions) };

  return (
    <div className="Render">
      <div className="Render-header">
        <h3>Rendered from Markdown</h3>
      </div>
       <span dangerouslySetInnerHTML={renderedMarkdown} />
    </div>
  );
}

export default Render;
