import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='w-screen p-5 bg-black flex item-center sticky top-0 justify-between  gap-2 text-white '>
      <div><p>FITSNAP</p></div>
      <div className='flex gap-3'>
        <Link to='/'><span>Home</span></Link>
        <Link to='/profile'><span>Profile</span></Link>
        {/* add more page in the navbar */}
      </div>
      <div>
        <button>Login</button>
        </div>
    </div>
  )
}

export default Navbar
