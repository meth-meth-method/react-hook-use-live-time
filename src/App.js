import React, { useEffect, useState, Component } from 'react';
import './App.css';

const useLiveDate = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const values = [
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      date.getHours(),
      date.getMinutes(),
      date.getSeconds() + 1,
      0,
    ];

    const next = new Date(...values);
    const delayMs = next - date;
    console.log("Emitting %s in %d", next.toISOString(), delayMs);
    const timeout = setTimeout(setDate, delayMs, next);
    return () => clearTimeout(timeout);
  }, [date, setDate]);

  return date;
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
