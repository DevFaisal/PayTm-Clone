import React from 'react'
import { Link } from 'react-router-dom';

function Warning({
    label,
    link,
    Button,

}) {
    return (
        <div className='flex justify-center gap-3 font-semibold text-gray-400'>
            <div>{label}</div>
            <div> <Link className='text-red-900' to={link}>
                {Button}
            </Link></div>
        </div>
    )
}

export default Warning;