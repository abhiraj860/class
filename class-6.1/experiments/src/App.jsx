import { useState } from 'react'

function Header({title}) {
  // console.log('rendered');
  return (
    <div>
      My name is &nbsp;{title}
    </div>
  );
}

function HeaderWithButton() {
  const [name, setName] = useState('Abhiraj 1');
  function clickHandle() {
    setName(Math.random());
  }
  return (
    <div>
      <button onClick={clickHandle}>Click me to change the title</button>
      <Header title={name} /> 
    </div>);
}

function App() {
  
  return (
    <div>
      <HeaderWithButton />  
      <Header title={"Abhiraj 2"} />    
      <Header title={"Abhiraj 3"} />    
      <Header title={"Abhiraj 4"} />    
      <Header title={"Abhiraj 5"} />    
      <Header title={"Abhiraj 6"} />    
    </div>
  );
}

export default App