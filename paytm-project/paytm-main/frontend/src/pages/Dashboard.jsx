import {Appbar} from '../components/Appbar'
import {Balance} from '../components/Balance'
import {Users} from '../components/Users'
import { useEffect, useState } from 'react';
import axios from 'axios';

export function Dashboard() {
    const [firstName, setFirstName] = useState('');
    const [balance, setBalance] = useState(0);
    useEffect(()=>{
        axios.get('http://localhost:3000/api/v1/account/balance', {
            headers : {
                authorization: "Bearer " + localStorage.getItem("token")
            }
        }).then(response=>{setBalance(response.data.balance); setFirstName(response.data.firstName)});
    } ,[]);
    return (
        <div className='mt-10'>
            <Appbar firstName={firstName}/>
            <Balance balance={balance} />
            <Users />
        </div>
    )
}