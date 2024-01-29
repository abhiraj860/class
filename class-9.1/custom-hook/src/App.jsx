import { useEffect, useState } from 'react'
import axios from 'axios'
import { useIsOnline } from './hooks/useIsOnline';
import { useMousePointer } from './hooks/useMousePointer';
import { useInterval } from './hooks/useInterval';
import { useDebounce } from './hooks/useDebounce';


function App() {
  
  const [inputValue, setInputValue] = useState('');

  const debouncedValue = useDebounce(inputValue, 500);

  
  return (
    <div>
      <input type='text' value={inputValue} onChange={(e)=>setInputValue(e.target.value)}  placeholder="Search..." />
      <div>{debouncedValue}</div>
    </div>
  )
}


export default App