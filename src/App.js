/** @flow
 *
 * Container that holds our header, input form and the rendering component
 *
 */

import React from 'react';
import './App.css'
import Render from './Render.js';

class App extends React.Component<*, *, *> {

  state: { markdown: string };

  constructor() {
    super();
    this.state = { markdown: "" };
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

        <form className="App-form">
          <textarea
            className="App-textarea"
            placeholder="Enter markdown here"
            onChange={(e) => this.handleTextChange(e)}
            value={this.state.markdown}
          />
        </form>

        <Render markdown={this.state.markdown}/>

      </div>
    );
  }

}


export default App;
