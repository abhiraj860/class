"use client"
import { signup } from "@/app/actions/user";
import { useState } from "react";

export function Signup() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    return (
        <div className="flex justify-center">
            <div className="flex items-center h-screen">
                <div>
                    <input onChange={(e)=>setUsername(e.target.value)} className="p-2 border-2" type='text' placeholder="username"></input>
                    <br></br>
                    <input onChange={(e)=>setPassword(e.target.value)} className="p-2 mt-5 border-2" type='password' placeholder="password"></input>
                    <div className="p-2 mt-5 text-center bg-black text-white">
                        <button onClick={(e)=>{
                            signup(username, password);
                        }}> Sign up</button>
                    </div>
                </div>
            </div>
        </div>
    );
}