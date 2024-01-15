import { useContext } from "react"
import { CountContext } from "./context";
import { useRecoilValue } from "recoil";
import { countAtom } from "./store/atoms/count";


function App() {
  
  // wrap anyone that wants to use the teleported value inside a provider
  return (
    <div>
        <Count />
    </div>
  )
}

function Count() {
  return <div>
    <CountRenderer />
    <Buttons />
  </div>
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return <div>
    {count}
  </div>
}

function Buttons() {
  const count = 0;
  return <div>
    <button onClick={() => {
      setCount(count + 1)
    }}>Increase</button>

    <button onClick={() => {
      setCount(count - 1)
    }}>Decrease</button>
  </div>
}

export default App
