function App() {
  return <div>
    <CardWrapper innerComponent={<TextComponenet/>} />
  </div>
}
// console.log('here');

function TextComponenet() {
  return <div>
    hi there
  </div>
}

function CardWrapper({innerComponent}) {
  return <div style={{
    border: "2px solid black",
    borderRadius: '10px'
  }}>
    {innerComponent}
  </div>
}

export default App
