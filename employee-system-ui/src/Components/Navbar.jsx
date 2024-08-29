import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='bg-gray-700 text-white py-3 px-3 md:px-8 lg:px-14 flex justify-between items-start'>
        <div>
            <h1 className='text-lg'>Employee Management System</h1>
        </div>
        <div className='flex space-x-4'>
          <Link to='/add' className='hover:text-gray-300'>Add Employee</Link>
          <Link to='/getusers' className='hover:text-gray-300'>Get Users</Link>
        </div>
    </div>
  );
}

export default Navbar;
