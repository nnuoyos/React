import { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0); 
  const increase = () => {
  setCounter(counter+1);
  };
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={increase}>증가</button>
    </div>
  );
}

export default App;
