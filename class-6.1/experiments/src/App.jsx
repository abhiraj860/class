import { useState } from 'react'

function Header({title}) {
  return (
    <div>
      {title}
    </div>
  );
}

function App() {

  return (
    <div>
      <Header title={"Abhiraj Aditya"} />  
      <Header title={"Abhiraj Aditya"} />  
    </div>
  );
}

export default App
