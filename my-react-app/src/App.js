import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const[count, setCount] = useState(0);

  function handleIncrement(prev){
    setCount(count + 1);
  }

  function handleDecrement(prev){
    setCount(count - 1);
  }


  return (
    <div className='Counter'>
      <h1>Counter</h1>
      <div className='displayStatus'>
          <h3>Count: {count}</h3>
      </div>
      <button onClick={handleDecrement}>Decrement Count</button>{"   "}
      <button onClick={handleIncrement}>Increment Count</button>
      
    </div>
  );
}

export default App;
