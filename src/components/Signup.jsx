import React, { useState } from 'react';
import { account } from '../appwrite/appwrite';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Sign up
  const signupUser = async (e) => {
    e.preventDefault();

    // Validate password
    if (password.length < 8) {
      console.log('Password must be at least 8 characters long');
      return;
    }

    const promise = account.create(
      uuidv4(),
      email,
      name,
      password
    );

    promise.then(
      function (response) {
        console.log(response); //success
        navigate('/profile')
      },
      function (error) {
        console.log(error); //Failure
      }
    );

    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1 className='text-center'>Sign up</h1>
      <form action="#" method='POST'>
        <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={signupUser}>Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
