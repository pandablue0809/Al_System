import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { Checkbox, Button } from '@nextui-org/react';

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

  const [emailValidatedStatus, setEmailValidatedStatus] = useState<boolean>(false);
  const [isAgree, setSsAgree] = useState<boolean>(false);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const { errorMessage } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (isAuthenticated) {
      // notificationController.success({ message: 'Login Successful!' });
      navigate('/dashboard/user-dashboard');
    } else {
      // !!errorMessage && notificationController.error({ message: `${errorMessage}` });
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
      dispatch(doLogin({ email: email, password: password }));
    } else {
      let message = '';
      Object.values(error_message).map((content) => {
        message = message.concat(' ', content);
      });
      // notificationController.error({ message: `Invalid${message} value` });
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
