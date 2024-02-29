import React, { useState } from 'react';
import { account } from '../appwrite/appwrite';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Sign up
  const signupUser = async (e) => {
    e.preventDefault();

    // Validate password
    if (password.length < 8) {
      setError('Password must be at least 8 characters long');
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
        console.log(response); // Success
        navigate('/profile')
      },
      function (error) {
        console.log(error); // Failure
      }
    );

    // Clear form fields after sign-up attempt
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <form action="#" method="POST" className="flex flex-col items-center justify-center mt-12 gap-4">
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" autoComplete="off" value={password} onChange={(e) => setPassword(e.target.value)} />
        {error && <p className="text-red-500">{error}</p>}
        <button onClick={signupUser}>Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
