import React from 'react'

export const CommonInput = ({type,placeholder,name,value,onChange}) => {
  return (
    <div className='p-5  m-2 flex flex-col justify-center gap-4 text-xl font-bold  ' >
        <label 
        className='p-4  border rounded-lg shadow-lg bg-gray-100'
        htmlFor={name}>{name}</label>
        <input        
        className=' p-3 border rounded-lg shadow-lg bg-red-100' 
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}

         />
    </div>
  )
}
