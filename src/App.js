/** @flow
 *
 * Container that holds our header, input form and the rendering component
 *
 */

import React from 'react';
import './App.css'
import Render from './Render.js';

const testData: string = `Heading
=======

Sub-heading
-----------

### Another deeper heading

Paragraphs are separated
by a blank line.

Leave 2 spaces at the end of a line to do a
line break

Text attributes *italic*, **bold**,
\`monospace\`, ~~strikethrough~~ .

Shopping list: Q

  * apples
  * oranges
  * pears

The rain---not the reign---in
Spain.

 *[Herman Fassett](https://freecodecamp.com/hermanfassett)*
 `;

class App extends React.Component<*, *, *> {

  state: { markdown: string };

  constructor() {
    super();
    this.state = { markdown: testData };
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

        <div className="App-container">

          <div className="App-box">
            <div className="App-box-header App-box-header-source">
              Markdown input
            </div>
            <div className="App-box-contents">
              <form className="App-form">
                <textarea
                  className="App-textarea"
                  placeholder="Enter markdown here"
                  onChange={(e) => this.handleTextChange(e)}
                  value={this.state.markdown}
                />
              </form>
            </div>
          </div>

          <div className="App-box">
            <div className="App-box-header App-box-header-render">
              HTML output
            </div>
            <div className="App-box-contents">
              <Render markdown={this.state.markdown}/>
            </div>
          </div>

        </div>

        <div className="App-footer">
             Page by <a href="https://jw120.github.io">jw120</a>.
         </div>

      </div>
    );
  }

}

/* <div className="App-box-contents">
//      <Render markdown={this.state.markdown}/>
//      </div>
*/


/*

Numbered list:

  1. apples
  2. oranges
  3. pears
 */

export default App;
