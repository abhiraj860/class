// import './App.css'

// hook
import {useState} from 'react';

function App() {
  const [todos, setTodos] = useState([{
    title: 'go to gym',
    description: 'go to gym from 7 to 9',
    completed: false
  }, {
    title: 'Study DSA',
    description: 'Study DSA from 2 to 1',
    completed: true
  }, {
    title: 'Study DSA',
    description: 'Study DSA from 2 to 1',
    completed: true
  }]);

  function addTodo() {
    setTodos([...todos, {
      title: 'new Todo',
      description: 'description of new todo'
    }])
  }

  return (
    <div>
      <button onClick={addTodo}>Add to do</button>
      {todos.map((todo)=>{
        return <Todo title = {todo.title} description = {todo.description}/>
      })}
    </div>
  )
}

// Component
function Todo(props) {
  return <div>
    <h1>{props.title}</h1>
    <h1>{props.description}</h1>
  </div>
}

export default App
