import React from 'react';

const Textarea = ({ id, name, label, placeholder}) => {
  return (
    <div className='w-full mb-3'>
        <label htmlFor={id}>{label}</label>
        <textarea 
        autoComplete='off' 
        id={id} 
        name={name} 
        rows={5}
        style={{ resize:'none'}}
        placeholder={placeholder} 
        className="w-full text-gray-900 placeholder-gray-400 border-gray-500 border-opacity-50 rounded-md focus:ring-2 focus:ring-purple-500"
         
        ></textarea>
    </div>
  );
}

export default Textarea;
