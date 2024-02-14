import {Heading} from '../components/Heading'
import {SubHeading} from '../components/SubHeading'
import {InputBox} from '../components/InputBox'
import {Button} from '../components/Button'
import {BottomWarning} from '../components/BottomWarning'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
export function SignUp() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setusername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    
    async function clickHandler() {
        try {
            const response = await axios.post('http://localhost:3000/api/v1/user/signup', {
                username,
                firstName,
                lastName,
                password
            });
            localStorage.setItem("token", response.data.token);
            navigate('/dashboard');
        } catch (error) {
            alert(error.response.data.message);
        }
        
    }

    return (
        <div className='h-[632px] bg-gray-400 flex justify-center'>
            <div className='h-[530px] p-3 bg-white w-96 rounded-lg mt-9'>
                <Heading text={"Sign Up"}/>
                <SubHeading text={"Enter your information to create an account"} />
                <InputBox onChange={e=>setFirstName(e.target.value)} name={"First Name"} placeholder={"John"}/>
                <InputBox onChange={e=>setLastName(e.target.value)} name={"Last Name"} placeholder={"Doe"}/>
                <InputBox onChange={e=>setusername(e.target.value)} name={"Email"} placeholder={"abhiraj@gmail.com"}/>
                <InputBox onChange={e=>setPassword(e.target.value)} name={"Password"} placeholder={"123456"}/>
                <Button onClick={clickHandler} text={"Sign Up"}/>
                <BottomWarning text={"Already have an account?"} link={"Sign In"} to={'/signin'} />
            </div>
        </div>
    )
}