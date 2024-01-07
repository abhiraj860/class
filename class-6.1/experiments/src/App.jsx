import { useState } from 'react'

function Header({title}) {
  return (
    <div>
      My name is &nbsp;{title}
    </div>
  );
}



function App() {
  const [name, setName] = useState('Abhiraj 1');
  function clickHandle() {
    setName(Math.random());
  }
  return (
    <>
      <button onClick={clickHandle}>Click me to change the title</button>
      <Header title={name} />  
      <Header title={"Abhiraj 2"} />  
    </>
  );
}

export default App
