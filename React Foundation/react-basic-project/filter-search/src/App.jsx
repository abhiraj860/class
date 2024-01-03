import { useState } from 'react'

const PRODUCTS = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];

function SearchTable({checkHandler}) {
  return (
    <div>
      <input type='text' placeholder='Search...' /> <br></br>
      <input type='checkbox' onChange={checkHandler}/> Only show product in stock
    </div>
  );
}

function ProductTable({items}) {
  const fruits = [];
  const vegetables = [];
  items.map((products)=>{
    if(products.category === "Fruits") {
      fruits.push(products);
    } else {
      vegetables.push(products);
    }
  });
  const fruitsEle = fruits.map((ele, id)=>{
    let col = ele.stocked === true ? 'black' : 'red'; 
    return (<li key={id}><span style={{color: col}}>{ele.name}</span> &nbsp;&nbsp;{ele.price}</li>)
  });
  const vegetableEle = vegetables.map((ele, id)=>{
    let col = ele.stocked === true ? 'black' : 'red'; 
    return (<li key={id}><span style={{color: col}} >{ele.name}</span> &nbsp;&nbsp;{ele.price}</li>)
  });
  return (
    <div>
      <p> <b>Name</b>  <b>Price</b></p>
      <div>
        <b>Fruits</b>
        <ul className='ul'>
          {fruitsEle}
        </ul>
      </div>
      <div>
        <b>Vegetables</b>
        <ul className='ul'>
          {vegetableEle}      
        </ul>
      </div>
    </div>

  );
}

function App() {
  const [items, setItems] = useState(PRODUCTS);
  
  function checkHandler(event) {
    if(event.target.checked) {
      const newArr = items.filter((value)=>{
        if(value.stocked === true) {
          return value;
        }
      });
      setItems(newArr);
    } else {
      const newArr = PRODUCTS;
      setItems(newArr);
    } 
  }

  return (
    <div>
      <SearchTable checkHandler={checkHandler}/>
      <ProductTable items={items}/>
    </div>
  )
}

export default App
