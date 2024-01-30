import React from 'react'

function InputField({
    label = "Text",
    type = "text",
    placeholder = "Enter text",
    onChange,
}) {
    return (
        <div className='flex flex-col'>
            <label className='text-md font-semibold'>{label}</label>
            <input className='px-3 py-2 rounded-sm none focus:ring-2 font-medium duration-300  ring-blue-500 outline-none bg-gray-200' onChange={onChange} type={type} placeholder={placeholder} />
        </div>
    )
}

export default InputField