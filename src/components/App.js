import React, { Component } from 'react';
import TodoTextInput from '../containers/TodoTextInput';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <TodoTextInput />
      </div>
    );
  }
}

export default App;
