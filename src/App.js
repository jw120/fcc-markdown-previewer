/** @flow
 *
 * Container that holds our state and includes the source and render components
 *
 */

import React from 'react';
import './App.css'
import Render from './Render.js';
import Source from './Source.js';

/** We start with some dummmy markdown */
const initialMarkdown: string = `
## Heading

Text attributes *italic*, **bold**, \`monospace\`, ~~strikethrough~~ .
  * apples
  * oranges
  * pears
    + red
    + blue

The 'rain'---not the reign---in "Spain".

*[Herman Fassett](https://freecodecamp.com/hermanfassett)*
`;

class App extends React.Component<*, *, *> {

  state: { markdown: string };

  constructor() {
    super();
    this.state = { markdown: initialMarkdown };
  }

  handleTextChange(e: Event) {
    if (e.target instanceof HTMLTextAreaElement) { // This is for flow which does not know what the event.target must be
      this.setState({ markdown: e.target.value });
    } else {
      console.log("Internal failure in handleTextChange: Unknown target", e);
    }
  }

  render(): React.Element<*> {
    return (
      <div className="App">

        <div className="App-header">
          Markdown previewer
        </div>

        <Source
          markdown={this.state.markdown}
          placeholder="Enter markdown here"
          changeCallback={(e) => this.handleTextChange(e)}
        />

        <Render
          markdown={this.state.markdown}
        />

        <div className="App-footer">
           Page by <a href="https://jw120.github.io">jw120</a>.
        </div>

      </div>
    );
  }

}

export default App;
