import React, { useState } from 'react'
import Topbar from '../Components/Topbar';
import InputField from '../Components/InputField';
import Button from '../Components/Button';
import Warning from '../Components/Warning';
import { useNavigate } from 'react-router-dom';
import axios from "axios"

function SignIn() {
    const [userName, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    return (
        <div className='bg-gray-500 flex justify-center items-center h-screen'>
            <div className='flex flex-col gap-3 bg-white p-5 w-80 rounded'>
                <Topbar label={"SignIn"} />
                <InputField
                    onChange={(e) => {
                        setUsername(e.target.value)
                    }} label='Username' placeholder='abc@gmail.com' type='text' />
                <InputField
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                    label='Password' placeholder='*****' type='password' />
                <Button onClick={async () => {
                    await axios.post("http://localhost:3000/api/v1/user/signin", {
                        userName,
                        password
                    }).then((res) => {
                        localStorage.setItem("token", res.data.token);
                        navigate('/dashboard');
                    })
                }} />
                <Warning label={'Not a User?'} Button={'SignUp'} link={'/signup'} />
            </div>
        </div>
    )
}

export default SignIn