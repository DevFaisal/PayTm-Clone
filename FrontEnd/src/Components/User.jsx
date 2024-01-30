import React, { useEffect, useState } from 'react'
import InputField from './InputField';
import axios from 'axios';

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
        <div>
            <div className='font-bold text-xl'>
                Users
            </div>

            <div>
                <InputField onChange={(e) => (
                    setFilter(e.target.value)
                )} placeholder={'Search User...'} label='' />
            </div>
            <div>
                {user.map((us) => (
                    <Users user={us} />
                ))}
            </div>
        </div>
    )
}

export default User;


function Users({ user }) {
    return (
        <>
            <div className='flex '>
                <div className='flex justify-between items-center bg-blue-200 w-full rounded p-2 m-3'>
                    <div className='flex'>
                        <div className=' flex justify-center items-center'>
                            <h1 className=' flex justify-center items-center text-white font-semibold text-xl bg-slate-900 w-10 h-10 rounded-full'>{user.firstName[0]}</h1>
                        </div>
                        <div className='font-semibold text-xl p-4'>
                            {user.firstName} {user.lastName}
                        </div>
                    </div>
                    <div>
                        <button type="button" className=" text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Send Money</button>
                    </div>
                </div>
            </div>
        </>
    )
}