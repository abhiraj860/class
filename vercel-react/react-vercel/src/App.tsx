import { useState } from "react";
import Homepage from "./components/Homepage"

const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

function App() {
  const [count, setCount] = useState(0);

  return <div>
    <Homepage title = "Develop. Preview. Ship"/>
    <ul>
      {names.map((val, ind)=><li key={ind}>{val}</li>)}
    </ul>
    <button onClick={()=>setCount((cnt)=>cnt + 1)}>{count}</button>
  </div>
}

export default App
