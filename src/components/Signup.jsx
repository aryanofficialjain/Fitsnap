import React, { useState, useContext } from 'react';
import { account } from '../appwrite/appwrite';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { Context } from '../context/ContextResultProvider';

// Other imports...

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { User, setUser } = useContext(Context);

  // Sign up
  const signupUser = async (e) => {
    e.preventDefault();

    // Validate password
    if (password.length < 8) {
      setError('Password must be at least 8 characters long');
      return;
    }

    try {
      // Make sign-up request
      const response = await account.create(uuidv4(), email, name, password);
      console.log(response); // Success

      // Navigate to profile page and set user state
      navigate('/profile');
      setUser(true);

      // Clear form fields after sign-up attempt
      setName('');
      setEmail('');
      setPassword('');
    } catch (error) {
      console.log(error); // Log any errors

      // Check if the error is related to password validation
      if (error.code === 'password_invalid') {
        setError('Password must be at least 8 characters long and not one of the commonly used passwords');
      } else {
        setError('An error occurred during sign-up. Please try again later.');
      }
    }
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

