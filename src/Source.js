/** @flow
 *
 * Stateless function component to provide a textarea for the source markdown
 *
 * Technique to add html into a react component is taken from
 *   https://facebook.github.io/react/tips/dangerously-set-inner-html.html
 *
 */

import React from 'react';
import './Source.css';

type Props = {
  markdown: string;
  placeholder: string;
  changeCallback: (e: Event) => void
};

function Source({ markdown, placeholder, changeCallback }: Props): React.Element<*> {

  return (
    <form className="Source">
      <textarea
        className="Source-textarea"
        placeholder={placeholder}
        onChange={changeCallback}
        value={markdown}
      />
    </form>
  );
}

export default Source;
