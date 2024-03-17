import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { Checkbox, Button } from '@nextui-org/react';

import PasswordInput from '../../input/passwordInput';
import EmailInput from '../../input/EmailInput';

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    console.log('here');
  };

  return (
    <div className='auth_back bg-[#010311] flex flex-col h-screen justify-center flex-wrap content-center'>
      <div className='first-line:items-center'>
        <div className='items-center flex justify-center bg-black bg-opacity-60 rounded-3xl shadow-orange-200 lg:px-16 px-8 py-32 align-middle '>
          <div>
            <div className='mb-10'>
              <h1 className='md:text-left  text-white text-center text-[24px] font-semibold mb-2' style={{ fontFamily: 'Poppins' }}>
                Reset <span className='text-[#ff69a5] ml-1'>Password</span>
              </h1>
              <p className='ml-2'>Enter your email address and we’ll send an verification code to reset your password.</p>
            </div>
            <label className='requireLabel' title='Email'>
              Email
            </label>
            <EmailInput value={email} onChange={setEmail} />
            <p className='ml-2'>
              Would you like to return to the
              <Link to='/auth/login' aria-current='page' className='text-[#1890ff] no-underline ml-2'>
                login page?
              </Link>
            </p>
            <div className='flex items-center justify-between my-5'>
              <Button
                className='m-2 shadow-lg font-medium text-[16px] border-box text-white px-9 w-full h-[2.8rem] rounded-[10px]'
                variant='shadow'
                color='secondary'
                onClick={handleSubmit}>
                <span>Send Instructions</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
