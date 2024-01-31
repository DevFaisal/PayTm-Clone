import React, { useState } from 'react'
import Topbar from '../Components/Topbar';
import InputField from '../Components/InputField';
import Button from '../Components/Button';
import Warning from './../Components/Warning';
import axios from "axios"
import { useNavigate } from 'react-router-dom';


function SignUp() {
    const [userName, setUserName] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    return (
        <div className='bg-gray-500 flex justify-center items-center h-screen'>
            <div className='flex flex-col gap-3 bg-white p-5 w-80 rounded'>
                <Topbar label={"SignUp"} />

                <InputField onChange={(e => (
                    setUserName(e.target.value)
                ))} label='Username' placeholder='abc@gmail.com' type='text' />

                <InputField onChange={(e => (
                    setFirstName(e.target.value)
                ))} label='First Name' placeholder='Faisal' type='text' />

                <InputField onChange={(e => (
                    setLastName(e.target.value)
                ))} label='Last Name' placeholder='Farooq' type='text' />

                <InputField onChange={(e => (
                    setPassword(e.target.value)
                ))}
                    label='Password' placeholder='*****' type='password' />
                <Button onClick={async () => {
                    const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
                        userName,
                        firstName,
                        lastName,
                        password
                    });
                    localStorage.setItem("token", response.data.token)
                    navigate('/dashboard')

                }} />
                <Warning label={'Already an User?'} Button={'SignIn'} link={'/signin'} />
            </div>
        </div>
    )
}

export default SignUp