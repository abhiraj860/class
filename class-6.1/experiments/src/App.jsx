import { useEffect, useState } from "react"

function App() {
  const [todos, setTodos] = useState([]);  
  
  useEffect(()=> {
    setInterval(()=>{
      fetch('https://sum-server.100xdevs.com/todos')
      .then(async(res)=>{
        const json = await res.json();
        setTodos(json.todos);
      })
    }, 2000);
    
  }, []);
  
  const arr = todos.map((todo)=> {
    return <div key = {todo.id}>
      <div><b>Title:</b> {todo.title}</div>
      <div><b>Description:</b> {todo.description}</div>
      <br></br>
    </div>
    
  });

  return <div>
     {arr}
  </div>
}

export default App
