import revalidate from "./lib/actions/action1";

interface Todo{
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

export default async function Home() {

  const res = await fetch('https://sum-server.100xdevs.com/todos', { next: { tags: ['todos'] } })
  const data = await res.json(); 
  revalidate();
  
  return ( <div>
    {data.todos.map((val:Todo)=>
        {
          return <div key={val.id}>
          <div>{val.id} </div> 
          <div>{val.title} </div> 
          <div>{val.description} </div>
          <div>{val.completed.toString()} </div> 
        </div>
        }
    )}     
  </div>
  );
}
