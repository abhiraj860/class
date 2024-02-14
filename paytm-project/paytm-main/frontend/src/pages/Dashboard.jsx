import {Appbar} from '../components/Appbar'
import {Balance} from '../components/Balance'
import {Users} from '../components/Users'
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export function Dashboard() {
    const [firstName, setFirstName] = useState('');
    const [balance, setBalance] = useState(0);
    const navigate = useNavigate();
    useEffect(()=>{
        axios.get('http://localhost:3000/api/v1/account/balance', {
            headers : {
                authorization: "Bearer " + localStorage.getItem("token")
            }
        })
        .then(response=>{setBalance(response.data.balance); setFirstName(response.data.firstName)})
        .catch(error=>{navigate('/signin')});
    } ,[]);
    return (
        <div> 
            <Appbar firstName={firstName}/>
            <Balance balance={balance} />
            <Users />
        </div>
    )
}