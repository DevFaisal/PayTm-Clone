import React from 'react'
import User from "../Components/User"
import Balance from './../Components/Balance';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const navigate = useNavigate()
    return (
        <div>
            <nav className='flex bg-gray-300 p-3 justify-between'>
                <div>
                    <h1 className='text-2xl font-bold'>
                        Paytm
                    </h1>
                </div>
                <div>
                    <button
                        onClick={() => {
                            localStorage.removeItem("token")
                            navigate('/signin')
                        }}
                    >
                        Logout
                    </button>
                </div>
            </nav>
            <div>
                <p className='text-xl font-semibold'><Balance /></p>
            </div>
            <div className='p-10'>
                <User />
            </div>
        </div>
    )
}

export default Dashboard