import {Heading} from '../components/Heading'
import {SubHeading} from '../components/SubHeading'
import {InputBox} from '../components/InputBox'
import {Button} from '../components/Button'
import {BottomWarning} from '../components/BottomWarning'

export function SignIn() {
    return (
        <div className='h-screen bg-gray-400 flex justify-center'>
            <div className='h-3/5 p-2 bg-white w-96 rounded-lg mt-9'>
                <Heading text={"Sign In"}/>
                <SubHeading text={"Enter your credentials to access your account"} />
                <br></br>
                <InputBox name={"Email"} placeholder={"abhiraj@gmail.com"}/>
                <InputBox name={"Password"} placeholder={"123456"}/>
                <Button text={"Sign In"}/>
                <BottomWarning text={"Don't have an account?"} link={"Sign Up"} to={'/signup'} />
            </div>
        </div>
    )
}