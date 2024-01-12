import {useState, useEffect} from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [calc, setCalc] = useState(0);

  useEffect(()=>{
    setCalc(()=>2 * count);
  }, [count]);

  return <div>
    <p>Count; {count}</p>
    <button onClick={()=>setCount(count + 1)}>+</button>
    <p>Calculations: {calc}</p>
  </div>
}

export default App;