import React from 'react'



const Input = ({ id, name, label, placeholder}) => {
 
return(
    <div className='w-full mb-3'>
        <label htmlFor={id}>{label}</label>
        <input 
        autoComplete='off' 
        type="text" 
        id={id} 
        name={name} 
        placeholder={placeholder} 
        className="w-full text-gray-900 placeholder-gray-400 border-gray-500 border-opacity-50 rounded-md focus:ring-2 focus:ring-purple-500"
         
        />
    </div>
)

}



export default Input

