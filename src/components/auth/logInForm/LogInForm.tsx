import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { Checkbox, Button } from '@nextui-org/react';

import PasswordInput from '../../input/passwordInput';
import EmailInput from '../../input/EmailInput';

const LoginForm: React.FC = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const [isAgree, setSsAgree] = useState<boolean>(false);

  const handleSubmit = () => {
    console.log('here');
  };

  return (
    <div className='auth_back bg-[#010311] flex flex-col h-screen justify-center flex-wrap content-center'>
      <div className='first-line:items-center xl:mr-[36rem]'>
        <h1 className='md:text-left  text-white text-center text-[24px] font-semibold' style={{ fontFamily: 'Poppins' }}>
          Sign In to <span className='text-[#ff69a5]'>Admin</span>
        </h1>
        <div className='items-center flex justify-center bg-black bg-opacity-60 rounded-lg shadow-orange-200 px-16 py-32 align-middle '>
          <div>
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
                <Checkbox isSelected={isAgree} size='sm' onValueChange={setSsAgree}>
                  Keep me logged in
                </Checkbox>
              </label>
              <a className='text-[#1890ff] decoration-inherit md:ml-4' href='/react/strikingdash/forgotPassword'>
                Forgot password?
              </a>
            </div>
            <p className='text-white text-center text-sm md:pb-4 sm:pb-5'>
              Have you account?
              <Link to='/auth/sign-up' aria-current='page' className='text-[#1890ff] no-underline ml-2'>
                Sign up now
              </Link>
            </p>
            <div className='flex items-center justify-between my-5'>
              <Button
                className='m-2 shadow-lg font-medium text-[16px] border-box text-white px-9 w-full h-[2.8rem] rounded-[10px]'
                isDisabled={!isAgree}
                variant='shadow'
                color='secondary'
                onClick={handleSubmit}>
                <span>Sign In</span>
              </Button>
            </div>
            <div className='mx-2'>
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  console.log(credentialResponse);
                }}
                onError={() => {
                  console.log('Login Failed');
                }}
                theme='filled_blue'
                text='continue_with'
                shape='square'
                useOneTap
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
