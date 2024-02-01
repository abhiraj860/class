import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [post, setPost] = useState(null);
  
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts/1").then(
      (resp)=>setPost(()=>resp.data) 
    );
  }, []);

  if(post === null) {
    return;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>    
  )
}

export default App
