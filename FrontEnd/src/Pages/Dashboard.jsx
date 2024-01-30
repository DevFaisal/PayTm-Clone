import React from 'react'
import User from "../Components/User"
import Balance from './../Components/Balance';

function Dashboard() {
    return (
        <div>
            <nav className='flex bg-gray-300 p-3 justify-between'>
                <div>
                    <h1 className='text-xl font-bold'>
                        Paytm
                    </h1>
                </div>
                <div>
                    Logout
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