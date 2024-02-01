import { useEffect, useState } from 'react'
import axios from 'axios'


function App() {
  const [post, setPost] = useState(null);
  
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts/1").then(
      (resp)=>setPost(()=>resp.data) 
    );
  }, []);

  async function createPost() {
    const resp = await axios.post("https://httpdump.app/dumps/80efa620-c201-462f-8621-4f27ab85824d", {
      id: 123,
      user: "Abhiraj",
      password: "secretpassword"
    });
  }

  if(post === null) {
    return;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={createPost}>Create Post</button>
    </div>    
  )
}

export default App
