import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { account } from '../appwrite/appwrite';


const Login = () => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const navigate = useNavigate();


  const loginuser = async(e) => {
    e.preventDefault();

    try{
      await account.createEmailSession(email, password);
      navigate('/profile');
    } catch(error){
      console.log(error);
    }

    setemail('');
    setpassword('');

  }
  
  return (
    <div className='flex flex-col items-center justify-center mt-12 gap-4'>
      <input type="email" placeholder='Email' value={email} onChange={(e)=> setemail(e.target.value)} />
      <input type="password" placeholder='Password' autoComplete='off' value={password} onChange={(e)=> setpassword(e.target.value)} />
      <button onClick={loginuser}>Login</button>

    </div>
  )
}

export default Login