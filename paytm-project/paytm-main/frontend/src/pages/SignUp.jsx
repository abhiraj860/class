import {Heading} from '../components/Heading'
import {SubHeading} from '../components/SubHeading'
import {InputBox} from '../components/InputBox'
import {Button} from '../components/Button'
import {BottomWarning} from '../components/BottomWarning'

export function SignUp() {
    return (
        <div className='h-screen bg-gray-400 flex justify-center'>
            <div className='h-5/6 p-3 bg-white w-96 rounded-lg mt-9'>
                <Heading text={"Sign up"}/>
                <SubHeading text={"Enter your information to create an account"} />
                <InputBox name={"First Name"} placeholder={"John"}/>
                <InputBox name={"Last Name"} placeholder={"Doe"}/>
                <InputBox name={"Email"} placeholder={"abhiraj@gmail.com"}/>
                <InputBox name={"Password"} placeholder={"123456"}/>
                <Button text={"Sign Up"}/>
                <BottomWarning text={"Already have an account?"} link={"Sign in"} to={'/signin'} />
            </div>
        </div>
    )
}