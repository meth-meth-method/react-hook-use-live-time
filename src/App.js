import React, { Component } from 'react';
import './App.css';

const useLiveDate = () => {
  return new Date();
}

const Now = () => {
  const date = useLiveDate();
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
