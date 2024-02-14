import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
export function Check() {
    const navigate = useNavigate();
    useEffect(()=>{
        try{
            axios.get('http://localhost:3000/api/v1/user/me', {
            headers : {
                authorization: "Bearer " + localStorage.getItem("token")
            }
            }).then(()=>{navigate('/dashboard')});
        } catch(error) {
            console.log(error);
        }
    } ,[]);
    
    return (
        <div>
        </div>
    )
}

export function CheckDash() {
    const navigate = useNavigate();
    useEffect(()=>{
        try{
            axios.get('http://localhost:3000/api/v1/user/me', {
            headers : {
                authorization: "Bearer " + localStorage.getItem("token")
            }
            }).then(()=>{navigate('/dashboard')}).catch(navigate('/signin'));
        } catch(error) {
            navigate('/signin');
        }
    } ,[]);
    
    return (
        <div>
        </div>
    )
}