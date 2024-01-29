import { useEffect, useState } from 'react'
import axios from 'axios'
import { useIsOnline } from './hooks/useIsOnline';
import { useMousePointer } from './hooks/useMousePointer';

function App() {
  
  
  const {xPos, yPos} = useMousePointer();
    
  
  return (
    <div>
      Mouse Pointer position {xPos} {yPos}
    </div>
  )
}


export default App