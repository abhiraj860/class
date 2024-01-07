import React, {  useState } from 'react'


function App() {
  const [todos, setTodos] = useState([{
    id: 1,
    title: 'go to gym',
    description: 'go to gym'
  }, {
    id: 2,
    title: 'tech',
    description: 'techie'
  }, {
    id: 3,
    title: 'hello',
    description: 'say hello'
  } 
]);
  
function addTodo() {
  setTodos([...todos, {
    id: 4,
    title: "abc",
    description: "avfaasfd"
  }]);
}

return (
  <div>
    <button onClick={addTodo}>Add a todo</button>
    {todos.map(todo=> <Todo key={todo.id} title={todo.title} description={todo.description} />)}
  </div>
);
}

function Todo({title, description}) {
  return (
    <div>
      <h1>
        {title}
      </h1>
      <h5>
        {description}
      </h5>
    </div>
  );
}

export default App
