import { memo, useCallback, useState } from "react";

function App() {
  const [count, setCount] = useState(0)

  const inputSomething = useCallback(() => {
      console.log("child clicked")
  }, []) 

  return <div>
    <ButtonChild inputSomething={inputSomething}/>
    <button onClick={() => {
      setCount(count + 1);
    }}>Click me {count}</button>
  </div>
}

const ButtonChild = memo(({inputSomething}) => {
  console.log("child render")
  return <div>
    <button>Button clicked</button>
  </div>
})

export default App;