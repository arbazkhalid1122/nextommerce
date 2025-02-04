import React from 'react';

const Navbar = () => {
  return (
    <div className='w-full h-16 flex items-center border-b border-gray-300 px-4 md:px-8'>
      <div className='w-24 h-10 bg-gray-600 text-white flex items-center justify-center rounded-md'>
        Logo
      </div>
      <div className='flex-grow flex justify-center'>
        <input 
          type='text' 
          placeholder='Search...' 
          className='w-3/4 md:w-1/3 h-10 bg-gray-300 text-gray-700 rounded-lg px-3 outline-none'
        />
      </div>
    </div>
  );
};

export default Navbar;
