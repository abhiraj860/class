import { useEffect, useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Users() {
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState('');
    const [show, setShow] = useState(false);
    useEffect(()=>{
        if(filter.length === 0) {
            setUsers(()=>[]);
            setShow(()=>false);
            return;
        } 
        const t = setTimeout(async () => {
            try {
                await axios.get("http://localhost:3000/api/v1/user/bulk?filter="+filter, {
                headers: {
                    authorization: "Bearer " + localStorage.getItem("token")
                }
                }).then(resp=>{setUsers(()=>resp.data.users)}, setShow(()=>false));
            } catch(error) {
                setShow(()=>true);
            } 
                
        }, 500);
        return () =>{
            clearInterval(t);
        }
    }, [filter]);

    return (
            <div className="mt-5">
            <div className="w-full flex justify-center">
                <div className="font-bold text-lg w-3/4">
                    Users
                </div>
            </div>
            <div className="grid grid-row-1 place-items-center mt-4">
                <div className="w-full flex justify-center">
                    <input onChange={e=>setFilter(e.target.value)} type="text" className="border-2 border-slate-200 rounded-sm w-3/4 p-2" placeholder="Search users..."/>
                </div>
                <div className="mt-5"></div>
                {show===true ? <div className="font-bold text-lg w-3/4 text-center">No user found</div> : users.map((value, id)=><Helper key={id} users={value}/>)}
            </div>
            
        </div>
        
    )
}



function Helper({users}) {
    const navigate = useNavigate();
    return (
        <div className="flex justify-between w-3/4 mt-5">
        <div className="flex justify-start items-center">
            <div className="flex justify-center items-center border-2 border-slate-300 w-10 h-10 rounded-full bg-slate-300">
            <div className="font-bold">
                {users.firstName[0].toUpperCase()}
            </div>
            </div>
            <div className="ml-3 font-bold text-md">
                {users.firstName}&nbsp;{users.lastName}
            </div>

        </div>  
        <div>
            <button onClick={(e)=>{
                navigate('/send?' + `id=${users._id}&name=${users.firstName}`);
            }} type="button" className=" w-40 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Send Money</button>
        </div>
    </div>
    )
}