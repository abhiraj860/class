import { useEffect, useState } from 'react'

function App() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);
  
  useEffect(()=>{
    setCalculation(()=> 2 * count);
  }, [count]);  

  return <div>
    <p>Count: {count}</p>
    <button onClick={()=>setCount((c)=>c + 1)}>+</button>
    <p>Calculation: {calculation}</p>
  </div>
}

export default App
