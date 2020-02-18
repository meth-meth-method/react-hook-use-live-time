import React, { Component } from 'react';
import './App.css';

const Now = () => {
  const date = new Date();
  return date.toISOString();
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Time is <Now/></h2>
        </div>
      </div>
    );
  }
}

export default App;
