import React from 'react'

function Button({
    onClick,
}) {
    return (
        <div className='flex justify-center'>
            <button onClick={onClick} type="button" className="w-96 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Submit</button>
        </div>
    )
}

export default Button