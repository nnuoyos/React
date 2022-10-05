/* import { useState } from 'react'; */
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import Box from "./component/Box"

function App() {
/*   const [counter, setCounter] = useState(0); */
  const dispatch = useDispatch()

  const count = useSelector((state) => state.count);

  const increase = () => {
    dispatch({type: "INCREMENT"})
  }
  
  const decrease = () => {
    dispatch({type: "DECREMENT"})
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increase}>증가</button>
      <button onClick={decrease}>감소</button>
      <Box/>
    </div>
  );
  }  
export default App
