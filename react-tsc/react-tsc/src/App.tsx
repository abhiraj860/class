function Mybutton({title} : {title: string}) {
  return (
    <button> {title} </button>
  )
}

function App() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <Mybutton title="I'm a button" />
    </div>
  )
}

export default App
