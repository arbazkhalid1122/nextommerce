import React from 'react';
import { useRouter } from 'next/router';
import { FaShoppingCart, FaUser } from 'react-icons/fa';

const Navbar = () => {
  const router = useRouter();
  let isAdmin = true

  return (
    <div className='w-full h-16 flex items-center border-b border-gray-300 px-4 md:px-8'>
      {/* Logo */}
      <div className='w-24 h-10 bg-gray-600 text-white flex items-center justify-center rounded-md'>
        Logo
      </div>

      {/* Search Bar */}
      <div className='flex-grow flex justify-center'>
        <input 
          type='text' 
          placeholder='Search products' 
          className='w-3/4 md:w-1/3 h-10 bg-gray-300 text-gray-700 rounded-lg px-3 outline-none'
        />
      </div>

      {/* Icons (Hidden for Admins) */}
      {!isAdmin && (
        <div className='flex items-center gap-4'>
          <FaShoppingCart 
            className='text-gray-700 text-xl cursor-pointer hover:text-gray-900'
            onClick={() => router.push('/user/cart')}
          />
          <FaUser 
            className='text-gray-700 text-xl cursor-pointer hover:text-gray-900'
            onClick={() => router.push('/user')}
          />
        </div>
      )}
    </div>
  );
};

export default Navbar;
