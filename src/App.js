import React, { useEffect, useMemo, useState } from 'react';
import './App.css';

const Unit = {
  Year: 0,
  Month: 1,
  Day: 2,
  Hour: 3,
  Minute: 4,
  Second: 5,
  MilliSecond: 6,
};

const useLiveDate = (unit) => {
  const initial = useMemo(() => new Date(), []);
  const [date, setDate] = useState(initial);

  useEffect(() => {
    const values = [
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
      date.getMilliseconds(),
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

const Now = ({unit}) => {
  const date = useLiveDate(unit);
  return date.toISOString();
}

const App = () => {
  const [unit, setUnit] = useState(5);

  return (
    <div className="App">
      <div className="App-header">
        <h2>Time is <Now unit={unit}/></h2>

        <input
          type="range"
          min="0"
          max="6"
          value={unit}
          onChange={event => setUnit(parseInt(event.target.value, 10))}
        />
      </div>
    </div>
  );
}

export default App;
