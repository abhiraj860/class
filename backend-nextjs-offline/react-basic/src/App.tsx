import { useEffect, useState } from "react"
import axios from "axios";
function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({
    email: "",
    name: ""
  });
  
  useEffect(()=>{
      axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details").then(res=>{
        setLoading(()=>false);
        setData(res.data);
      });
  }, []);

  if(loading) {
    return "loading..."
  }

  return (
    <>
      {data.email}
      <br></br>
      {data.name}      
    </>
  )
}

export default App
