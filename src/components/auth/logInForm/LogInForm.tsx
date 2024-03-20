import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { Button } from '@nextui-org/react';
import { toast } from 'react-toastify';

import { useAppSelector, useAppDispatch } from '../../../hooks/useReduxHooks';
import { doLogin } from '../../../store/slices/authSlice';
import PasswordInput from '../../input/passwordInput';
import EmailInput from '../../input/EmailInput';

type Error = {
  email?: string;
  password?: string;
};

const LoginForm: React.FC = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setLoading] = useState(false);

  const [emailValidatedStatus, setEmailValidatedStatus] = useState<boolean>(false);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const { errorMessage } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (isAuthenticated) {
      toast.success('Login Successful!');
      navigate('/dashboard/user/work');
    } else {
      !!errorMessage && toast.error(`${errorMessage}`);
    }
  }, [isAuthenticated, errorMessage]);

  const handleSignInButtonClick = () => {
    const error_message: Error = {};

    if (!emailValidatedStatus) {
      error_message.email = 'Email';
    }
    if (!password) {
      error_message.password = 'Empty password';
    }

    if (Object.keys(error_message).length === 0) {
      setLoading(true);
      dispatch(doLogin({ email: email, password: password }));
    } else {
      setLoading(false);
      let message = '';
      Object.values(error_message).map((content) => {
        message = message.concat(' ', content);
      });
      toast.error(`Invalid${message} value`);
    }
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
            <EmailInput value={email} onChange={setEmail} setEmailValidatedStatus={setEmailValidatedStatus} />
            <label className='requireLabel' title='Email'>
              Password
            </label>
            <PasswordInput value={password} onChange={setPassword} />
            <div className='flex my-5 flex-col md:flex-row ml-2'>
              <label>Keep me logged in</label>
              <Link to='/auth/forgot-password' className='text-[#1890ff] decoration-inherit md:ml-4'>
                Forgot password?
              </Link>
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
                isDisabled={isLoading}
                isLoading={isLoading}
                variant='shadow'
                color='secondary'
                spinner={
                  <svg className='animate-spin h-5 w-5 text-current' fill='none' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                    <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
                    <path
                      className='opacity-75'
                      d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                      fill='currentColor'
                    />
                  </svg>
                }
                onClick={handleSignInButtonClick}>
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
