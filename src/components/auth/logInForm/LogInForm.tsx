import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import Button from '@mui/material/Button';
import { toast } from 'react-toastify';

import { useAppSelector, useAppDispatch } from '../../../hooks/useReduxHooks';
import { doLogin } from '../../../store/slices/authSlice';
import PasswordInput from '../../common/input/PasswordInput';
import EmailInput from '../../common/input/EmailInput';

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
      navigate('/dashboard/user');
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
    <div className='relative bg-gray-200 w-full pb-[110px] md:pb-[40px] md:pt-0 bg-main-background dark:bg-main-background-dark bg-center bg-cover transition-all duration-1000 flex flex-col h-screen justify-center flex-wrap content-center'>
      <div
        id='main-lefttop'
        className='absolute top-[100px] right-0 w-[232px] md:top-[210px] md:left-[10%] md:w-[464px] md:h-[260px] bg-main-lefttop dark:bg-main-lefttop-dark bg-center bg-cover' />
      <div
        id='main-righttop'
        className='absolute bottom-0 right-0 w-[300px] h-[325px] md:top-8 md:right-[12px] md:w-[750px] md:h-[797px] bg-main-righttop dark:bg-main-righttop-dark bg-center bg-cover' />
      <div
        id='main-center'
        className='absolute left-[-70px] top-[20%] w-[275px] h-[225px] xl:left-[calc(50%-300px)] lg:left-[calc(50%-600px)] md:left-[calc(60%-700px)] md:top-[calc(50%-170px)] md:w-[550px] md:h-[450px] bg-main-center dark:bg-main-center-dark bg-center bg-cover pointer-events-none z-20' />

      <div className='first-line:items-center xl:mr-[36rem] z-10'>
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
                color='secondary'
                onClick={handleSignInButtonClick}
                sx={{
                  backgroundColor: '#ff69a5',
                  '&:hover': {
                    backgroundColor: '#f779a5',
                  },
                  mx: 1,
                  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
                  fontWeight: '500',
                  fontSize: '16px',
                  boxSizing: 'border-box',
                  color: 'white',
                  px: 9,
                  width: '100%',
                  height: '2.5rem',
                  borderRadius: '5px',
                }}>
                <span>Sign In</span>
              </Button>
            </div>
            <div className='mx-2 flex justify-center'>
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
                width={'310px'}
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
