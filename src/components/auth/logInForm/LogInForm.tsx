import React, { useState } from 'react';
import PasswordInput from '../../input/passwordInput';
import EmailInput from '../../input/EmailInput';
import GoogleButton from 'react-google-button';

const LoginForm: React.FC = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    console.log('here');
  };

  const responseGoogleSuccess = (response: any) => {
    console.log(response);
  };

  const responseGoogleFailure = (response: any) => {
    console.log(response);
  };

  return (
    <div className='auth_back bg-[#010311] flex flex-col h-screen justify-center flex-wrap content-center'>
      <div className='first-line:items-center xl:mr-[36rem]'>
        <h1 className='md:text-left  text-white text-center text-[24px] font-semibold' style={{ fontFamily: 'Poppins' }}>
          Sign In to <span className='text-[#ff69a5]'>Admin</span>
        </h1>
        <div className='items-center flex justify-center bg-black bg-opacity-60 rounded-lg shadow-orange-200 px-16 py-32 align-middle '>
          <form onSubmit={handleSubmit}>
            <label className='requireLabel' title='Email'>
              Username or Email Address
            </label>
            <EmailInput value={email} onChange={setEmail} />

            <label className='requireLabel' title='Email'>
              Password
            </label>
            <PasswordInput value={password} onChange={setPassword} />
            <div className='flex my-5 flex-col md:flex-row ml-2'>
              <label>
                <input type='checkbox' />
                <span className='mr-2'></span>
                <span className='text-white'>Keep me logged in</span>
              </label>
              <a className='text-[#1890ff] decoration-inherit md:ml-4' href='/react/strikingdash/forgotPassword'>
                Forgot password?
              </a>
            </div>
            <p className='text-white text-center text-sm md:pb-4 sm:pb-5'>
              Have you account?
              <a aria-current='page' className='text-[#1890ff] no-underline ml-2' href='/react/strikingdash/'>
                Sign up now
              </a>
            </p>
            <div className='flex items-center justify-between my-5'>
              <button
                type='submit'
                className='m-2 shadow-lg font-medium text-[16px] border-box text-white bg-secondary hover:bg-[#823cf1] focus:shadow-outline focus:outline-none px-9 w-full h-[2.8rem] rounded-[10px]'>
                <span>Sign In</span>
              </button>
            </div>
            <div className='mx-2'>
              <GoogleButton
                label='Sign in with Google'
                className='custom-google-login'
                onClick={() => {
                  console.log('Google button clicked');
                }}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
