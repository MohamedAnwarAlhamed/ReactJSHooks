import {react, useState} from 'react';
import logo from './logo.svg';
import './App.css';

const  App = () => {
  const [count, setCount] = useState(0);
  const [isRed, setRed] = useState(false);
  const handleIncrement = () => {
    setCount(count + 1);
    setRed(!isRed);
  };
  return (
    <div className="app">
      <button className="btn" onClick={handleIncrement}>Increment</button>
      <h1>{count}</h1>
      <h1 className={isRed ? "red" : ""}>change my color</h1>

    </div>
  );
}

export default App;
