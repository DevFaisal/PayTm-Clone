import React from 'react'
import Topbar from '../Components/Topbar';
import InputField from '../Components/InputField';
import Button from '../Components/Button';
import Warning from '../Components/Warning';

function SignIn() {
    return (
        <div className='bg-gray-500 flex justify-center items-center h-screen'>
            <div className='flex flex-col gap-3 bg-white p-5 w-80 rounded'>
                <Topbar label={"SignIn"} />
                <InputField label='Username' placeholder='abc@gmail.com' type='text' />
                <InputField label='Password' placeholder='*****' type='password' />
                <Button />
                <Warning label={'Not a User?'} Button={'SignUp'} link={'/signup'} />
            </div>
        </div>
    )
}

export default SignIn