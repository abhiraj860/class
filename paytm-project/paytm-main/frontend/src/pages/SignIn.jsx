import {Heading} from '../components/Heading'
import {SubHeading} from '../components/SubHeading'
import {InputBox} from '../components/InputBox'
import {Button} from '../components/Button'
import {BottomWarning} from '../components/BottomWarning'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Check } from '../components/Check'
import axios from 'axios'

export function SignIn() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    async function clickHandler() {
        try {
            const response = await axios.post('http://localhost:3000/api/v1/user/signin', {
                username,
                password
            });
            localStorage.setItem('token', response.data.token);
            navigate('/dashboard');
        } catch(error) {
            alert(error.response.data.message);
        }
    }

    return (
        <div className='h-[632px] bg-gray-400 flex justify-center'>
            <div className='h-3/5 p-2 bg-white w-96 rounded-lg mt-9'>
                <Check />
                <Heading text={"Sign In"}/>
                <SubHeading text={"Enter your credentials to access your account"} />
                <br></br>
                <InputBox onChange={e=>setUsername(e.target.value)} name={"Email"} placeholder={"abhiraj@gmail.com"}/>
                <InputBox onChange={e=>setPassword(e.target.value)} name={"Password"} placeholder={"123456"}/>
                <Button onClick={clickHandler} text={"Sign In"}/>
                <BottomWarning text={"Don't have an account?"} link={"Sign Up"} to={'/signup'} />
            </div>
        </div>
    )
}