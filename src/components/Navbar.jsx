import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../context/ContextResultProvider';
const Navbar = () => {
  const {User} = useContext(Context);
  return (
    <div className='w-screen p-5 bg-black flex item-center sticky top-0 justify-between  gap-2 text-white '>
      <div><p>FITSNAP</p></div>
      <div className='flex gap-3'>
        <Link to='/'><span>Home</span></Link>
        {User ? (<Link to='/profile'><span>Profile</span></Link>): (null)}
        {/* add more page in the navbar */}
      </div>
      <div className='flex gap-6'>
        <Link to='/login'><button>Login</button></Link>
        <Link to='/signup'><button>Signup</button></Link>
        </div>
    </div>
  )
}

export default Navbar
