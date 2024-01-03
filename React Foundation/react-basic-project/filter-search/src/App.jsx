import { useState } from 'react'

const PRODUCTS = [
  {id:1, category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {id:2, category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {id:3, category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {id:4, category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {id:5, category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {id:6, category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];

function SearchTable({checkHandler, inputHandler}) {
  return (
    <div>
      <input type='text' onChange={inputHandler} placeholder='Search...' /> <br></br>
      <input type='checkbox' onChange={checkHandler}/> Only show product in stock
    </div>
  );
}

function ProductTable({filterItems}) {
  const fruits = [];
  const vegetables = [];
  filterItems.map((products)=>{
    if(products.category === "Fruits") {
      fruits.push(products);
    } else {
      vegetables.push(products);
    }
  });
  const fruitsEle = fruits.map((ele)=>{
    let col = ele.stocked === true ? 'black' : 'red'; 
    return (<li key={ele.id}><span style={{color: col}}>{ele.name}</span> &nbsp;&nbsp;{ele.price}</li>)
  });
  const vegetableEle = vegetables.map((ele)=>{
    let col = ele.stocked === true ? 'black' : 'red'; 
    return (<li key={ele.id}><span style={{color: col}} >{ele.name}</span> &nbsp;&nbsp;{ele.price}</li>)
  });
  const tabl = [];
  if(fruitsEle.length !== 0) {
    tabl.push(<div><b>Fruits</b><ul className='ul'>{fruitsEle}</ul></div>);
  }
  if(vegetableEle.length !== 0) {
    tabl.push(<div><b>Vegetables</b><ul className='ul'>{vegetableEle}</ul></div>);
  }
  return (
    <div>
      <p> <b>Name</b>  <b>Price</b></p>
      {tabl}
    </div>

  );
}

function App() {
  const [items, setItems] = useState(PRODUCTS);
  const [filterItems, setFilterItems] = useState(PRODUCTS);

  function checkHandler(event) {
    if(event.target.checked) {
      const newArr = filterItems.filter((value)=>{
        if(value.stocked === true) {
          return value;
        }
      });
      setFilterItems(newArr);
    } else {
      const newArr = PRODUCTS.slice();
      setFilterItems(newArr);
    } 
  }

  function inputHandler(event) {
    const newArr = items.filter((value)=>{
      return value.name.startsWith(event.target.value);
    });
    setFilterItems(newArr);
  }

  return (
    <div>
      <SearchTable checkHandler={checkHandler} inputHandler={inputHandler}/>
      <ProductTable filterItems={filterItems}/>
    </div>
  )
}

export default App
