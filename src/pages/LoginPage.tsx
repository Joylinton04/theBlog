import React, { useEffect, useState } from 'react';
import { useAppDispatch,useAppSelector } from '../store/store';
import { login,signUp as SignUp } from '../store/authSlice';
import { useNavigate } from 'react-router-dom';
import loginImg from '../assets/login.svg';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [signUp, setSignUp] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  // const users = useAppSelector(state => state.auth.users)
  const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated)
  const hasAccount = useAppSelector(state => state.auth.hasAccount)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(login({ name: username, password:password }))
  };

  const toggleSignup = ():void => {
    setSignUp(prev => !prev);
  };

  const handleSignUp = (e:React.FormEvent) => {
    e.preventDefault();
    dispatch(SignUp({ name: username, email: email, password: password }))
  }

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/'); 
    }
  }, [isAuthenticated, navigate]); 

  return (
    <div className='flex justify-center items-center min-h-screen font-lora'>
      <div className='flex items-center justify-center flex-wrap'>
      <form className={`sm:border sm:border-gray-300 min-h-[450px] min-w-[400px] sm:w-[500px] pad ${signUp ? 'lg:translate-x-[100%]' : ''} duration-500`} onSubmit={signUp?handleSignUp : handleLogin}>
            <h1 className='uppercase font-title text-3xl text-center'>in today</h1>

          {
            !signUp ?
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

                {/* !has account */}
                {!hasAccount && <p className='text-red-500'>Invalid details</p>}

              <button type="submit" className="bg-black text-white text-sm p-2 uppercase">
                {signUp?
                  'signup'
                  : 'Login'
                }
              </button>
              <p className='underline text-[#5b5a5a] text-sm cursor-pointer' onClick={toggleSignup}>
                {signUp?
                'Already have an account? Sign in'
                : 'Sign Up?'
              }
              </p>
            </div>
            : 
            <div className='flex flex-col gap-6 border border-gray-300 p-4 mt-6'>
              <p className='text-center mt-4 uppercase font-semibold'>Welcome to BlogBlound🚀</p>
                <label className="font-medium text-sm">Username:</label>
                <input 
                  required 
                  type="text" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="border border-gray-300 p-2 w-full" 
                  name="name"/>
              
                <label className="font-medium text-sm">Email:</label>
                <input 
                  required 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border border-gray-300 p-2 w-full" 
                  name="email"/>

                <label className="font-medium text-sm">Password:</label>
                <input 
                  required 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border border-gray-300 p-2 w-full" 
                  name="Password"/>

                   {/*!has account */}
                   {!hasAccount && <p className='text-red-500'>Account already exists</p>}

                <button type="submit" className="bg-black text-white text-sm p-2 uppercase">
                  {signUp?
                    'signup'
                    : 'Login'
                  }
                </button>
                <p className='underline text-[#5b5a5a] text-sm cursor-pointer' onClick={toggleSignup}>
                  {signUp?
                  'Already have an account? Sign in'
                  : 'Sign Up?'
                }
                </p>
            </div>
            }
            {!signUp && <p className='text-center mt-4 uppercase font-semibold'>Welcome to BlogBlound🚀</p>}
        </form>
        <img src={loginImg} alt="" className={`w-[460px] min-h-[450px] object-cover object-center ${signUp ? 'lg:-translate-x-[100%]' : ''} duration-500`}/>
      </div>
    </div>
  );
};

export default LoginPage;