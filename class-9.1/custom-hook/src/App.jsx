import { useEffect, useState } from 'react'
import axios from 'axios'
import { useIsOnline } from './hooks/useIsOnline';
import { useMousePointer } from './hooks/useMousePointer';
import { useInterval } from './hooks/useInterval';



function App() {
  
  const [count, setCount] =   useState(0);
  
  useInterval(()=>{
    setCount(c=>c + 1);
  }, 1000)
  
  return (
    <div>
      Timer set at {count}
    </div>
  )
}


export default App