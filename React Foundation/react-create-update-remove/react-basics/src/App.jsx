import { useState } from 'react'
import './App.css'

function InputItem({oninput, message}) {
  return (
    <input type='text' placeholder='Add a new item' onChange={oninput} value={message}/>
  );
}

function AddItem({handler}) {
  return (
    <button onClick={handler}>Add</button>
  );
}



function Lists({getList}) {
  function lists() {
    return getList.map((value, id)=>{
      return (<li key={id}>{value}</li>);
    });
  }

  return (
    <div>
      {lists()}
    </div>
  );
}

function ShoppingList() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState('');
  const [message, setMessage] = useState('');

  function inputHandler(event) {
    setInput(event.target.value);
    setMessage(event.target.value);
  }


  function addHandler() {
    if(input.length === 0) {
      alert('Please enter an input');
      return;
    }
    const newArr = [...items, input];
    setItems(newArr);
    setInput('');
    setMessage('');
  }
  
  function removeHandler() {
    if(items.length === 0) {
      alert('Nothing to remove');
      return;
    }
    const newArr = [...items];
    newArr.pop();
    setItems(newArr);
  }

  return (
    <div>
      <div>
        <InputItem oninput={inputHandler} message={message}/> <AddItem handler={addHandler}/>
        <button onClick={removeHandler}>Remove</button>
      </div>
      <div>
        <Lists getList={items} removeHandler={removeHandler}/>
      </div>
    </div>
  );
}

export default ShoppingList
