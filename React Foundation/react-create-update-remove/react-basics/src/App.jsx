import { useState } from 'react'
import './App.css'

function InputItem({oninput}) {
  return (
    <input type='text' placeholder='Add a new item' onChange={oninput} />
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
  const [items, setItems] = useState(['Apple', 'Orange', 'Mango','Peach', 'Melo']);
  const [input, setInput] = useState('dfdfds');

  function inputHandler(event) {
    setInput(event.target.value);
  }

  function clickHandler() {
    const newArr = [...items, input];
    setItems(newArr);
  }

  return (
    <div>
      <div>
        <InputItem oninput={inputHandler}/> <AddItem handler={clickHandler}/>
      </div>
      <div>
        <Lists getList={items}/>
      </div>
    </div>
  );
}

export default ShoppingList
