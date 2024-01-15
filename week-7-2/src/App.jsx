import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";


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
    <RecoilRoot>
      <CountRenderer />
      <EventCountRenderer />
      <Buttons />
    </RecoilRoot>

  </div>
}

function EventCountRenderer() {
  const count = useRecoilValue(evenSelector);
  return <div>
    {count % 2 === 0 && "I am even"}
  </div>
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return <div>
    {count}
  </div>
}

function Buttons() {
  const setCount = useSetRecoilState(countAtom);
  return <div>
    <button onClick={() => {
      setCount(count=>count + 1)
    }}>Increase</button>

    <button onClick={() => {
      setCount(count=>count - 1)
    }}>Decrease</button>
  </div>
}

export default App
