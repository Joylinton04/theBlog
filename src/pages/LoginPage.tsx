import React, { useEffect, useState } from 'react';
import { useAppDispatch,useAppSelector } from '../store/store';
import { login } from '../store/authSlice';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  // const users = useAppSelector(state => state.auth.users)
  const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(login({ name: username, password:password }))
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/'); 
    }
  }, [isAuthenticated, navigate]); 

  return (
    <div className='flex justify-center items-center h-screen font-lora'>
      <form className='border border-gray-300 h-[450px] w-[500px] pad' onSubmit={handleLogin}>
          <h1 className='uppercase font-title text-3xl text-center'>in today</h1>

          <div className='flex flex-col gap-6 border border-gray-300 p-4 mt-6'>
            <label className="font-medium text-sm">Username:</label>
            <input 
              required 
              type="text" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="border border-gray-300 p-2 w-full" 
              name="name"/>
          
            <label className="font-medium text-sm">Password:</label>
            <input 
              required 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-300 p-2 w-full" 
              name="Password"/>

            <button type="submit" className="bg-black text-white text-sm p-2 uppercase">Login</button>
          </div>
          <p className='text-center mt-4 uppercase font-semibold'>Welcome to BlogBlound🚀</p>
      </form>
    </div>
  );
};

export default LoginPage;