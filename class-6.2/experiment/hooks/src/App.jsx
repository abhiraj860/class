import {useState} from 'react';

function App() {
  const [color, setColor] = useState('red');
  return <div>
    My favourite color is {color}
  </div>
}

export default App;
