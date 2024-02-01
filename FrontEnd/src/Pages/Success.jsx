import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Success() {
    const navigate = useNavigate()
    const amount = useParams();
    useEffect(() => {
        setTimeout(() => {
            navigate("/dashboard")
        }, 2000)
    }, [])

    return (
        <div class="flex justify-center h-screen bg-gray-500">
            <div className="h-full flex flex-col justify-center">
                <div className="flex flex-col justify-center items-center border h-min text-card-foreground max-w-md p-4 space-y-8 w-96 bg-white shadow-lg rounded-lg" >
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60" height="60" viewBox="0 0 48 48">
                            <linearGradient id="5zzMGVQnN_QyRYWGmJUsQa_A8xKzsTKHhzn_gr1" x1="9.858" x2="38.142" y1="9.858" y2="38.142" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#21ad64"></stop><stop offset="1" stop-color="#088242"></stop></linearGradient><path fill="url(#5zzMGVQnN_QyRYWGmJUsQa_A8xKzsTKHhzn_gr1)" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"></path><path d="M32.172,16.172L22,26.344l-5.172-5.172c-0.781-0.781-2.047-0.781-2.828,0l-1.414,1.414	c-0.781,0.781-0.781,2.047,0,2.828l8,8c0.781,0.781,2.047,0.781,2.828,0l13-13c0.781-0.781,0.781-2.047,0-2.828L35,16.172	C34.219,15.391,32.953,15.391,32.172,16.172z" opacity=".05"></path><path d="M20.939,33.061l-8-8c-0.586-0.586-0.586-1.536,0-2.121l1.414-1.414c0.586-0.586,1.536-0.586,2.121,0	L22,27.051l10.525-10.525c0.586-0.586,1.536-0.586,2.121,0l1.414,1.414c0.586,0.586,0.586,1.536,0,2.121l-13,13	C22.475,33.646,21.525,33.646,20.939,33.061z" opacity=".07"></path><path fill="#fff" d="M21.293,32.707l-8-8c-0.391-0.391-0.391-1.024,0-1.414l1.414-1.414c0.391-0.391,1.024-0.391,1.414,0	L22,27.758l10.879-10.879c0.391-0.391,1.024-0.391,1.414,0l1.414,1.414c0.391,0.391,0.391,1.024,0,1.414l-13,13	C22.317,33.098,21.683,33.098,21.293,32.707z"></path>
                        </svg>
                    </div>
                    <div className='flex flex-col gap-2 justify-center items-center'>
                        <h1 className='text-3xl font-semibold'>Rs {amount.amount}</h1>
                        <h1 className='text-xl font-semibold'>Successfully Transferred </h1>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Success
