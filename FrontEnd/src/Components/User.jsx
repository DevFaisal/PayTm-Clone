import React, { useEffect, useState } from 'react'
import InputField from './InputField';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function User() {
    const [filter, setFilter] = useState('')
    const [user, setUser] = useState([])
  
    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/user/bulk?filter=" + filter)
            .then((res) => (
                setUser(res.data.user)
            ))
    }, [filter])

    return (
        <div className='w-full'>
            <div>
                <InputField onChange={(e) => (
                    setFilter(e.target.value)
                )} placeholder={'Search User...'} label='' />
            </div>
            <div className='grid grid-cols-3'>
                {user.map((us) => (
                    <Users user={us} />
                ))}
            </div>
        </div>
    )
}

export default User;


function Users({ user }) {
      const navigate = useNavigate()

    return (
        <>
            <div className='flex '>
                <div className='flex justify-between items-center bg-zinc-200 w-full rounded p-2 m-3'>
                    <div className='flex'>
                        <div className=' flex justify-center items-center'>
                            <h1 className=' flex justify-center items-center text-white font-semibold text-xl bg-slate-900 w-10 h-10 rounded-full'>{user.firstName[0]}</h1>
                        </div>
                        <div className='font-semibold p-2'>
                            {user.firstName} {user.lastName}
                        </div>
                    </div>
                    <div>
                        <button
                            onClick={() => {
                                navigate("/transfer?id=" + user._id + "&name=" + user.firstName);
                            }}
                            type="button" className=" text-white bg-blue-500 hover:bg-blue-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Pay</button>
                    </div>
                </div>
            </div>
        </>
    )
}