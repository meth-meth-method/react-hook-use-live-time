import React, { useEffect, useState, Component } from 'react';
import './App.css';

const useLiveDate = (unit) => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const values = [
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
      0,
    ].map((value, index) => {
      if (index === unit) {
        return value + 1;
      } else if (index > unit) {
        return 0;
      }
      return value;
    })

    const next = new Date(...values);
    const delayMs = next - date;
    console.log("Emitting %s in %d", next.toISOString(), delayMs);
    const timeout = setTimeout(setDate, delayMs, next);
    return () => clearTimeout(timeout);
  }, [unit, date, setDate]);

  return date;
}

const Now = () => {
  const date = useLiveDate(5);
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
