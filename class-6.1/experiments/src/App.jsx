import React, {  useState } from 'react'

const Header = React.memo(
  
function Header({title}) {
  return (
    <div>
      My name is &nbsp;{title}
    </div>
  );
}
);



function App() {
  const [name, setName] = useState('Abhiraj 1');
  function clickHandle() {
    setName(Math.random());
  }
  return (
    <div>
      <button onClick={clickHandle}>Click me to change the title</button>
      <Header title={name} />  
      <Header title={"Abhiraj 2"} />  
      <Header title={"Abhiraj 3"} />  
      <Header title={"Abhiraj 4"} />  
      <Header title={name} />  
    </div>
  );
}

export default App
