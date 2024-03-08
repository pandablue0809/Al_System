import React, { useState } from 'react';
import PasswordInput from '../../input/passwordInput';
import EmailInput from '../../input/EmailInput';
import { GoogleLogin } from 'react-google-login';

const LoginForm: React.FC = () => {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = () => {
        console.log("here")
    }

    const responseGoogleSuccess = (response: any) => {
      console.log(response);
    }

    const responseGoogleFailure = (response: any) => {
      console.log(response);
    }

    return (
     <div className="auth_back grid md:grid-cols-10 sm:grid-rows bg-[#010311] min-h-screen flex flex-col">
      <div className='md:col-span-1'>
      </div>
        <div className="md:col-span-5 sm:w-full block first-line:items-center py-7 px-14 xs:p-1">
          <h1 className="md:text-left mb-3 md:mb-10 text-white text-center text-[24px] font-semibold " style={{fontFamily: 'Poppins'}}>Sign In to <span className="text-[#ff69a5]">Admin</span></h1>
      <div className='items-center flex justify-center bg-black bg-opacity-60 rounded-lg shadow-orange-200  px-5 py-32'>
        <form
          className=" sm:w-80"
          onSubmit={handleSubmit}
        >
          <label className="requireLabel" title="Email">
              Username or Email Address
          </label>
          <EmailInput value={email} onChange={setEmail} />
          
          <label className="requireLabel" title="Email">
            Password
          </label>
          <PasswordInput value={password} onChange={setPassword} />
          <div className='flex justify-between mb-5 flex-col md:flex-row'>
            <label>
              <span>
                <input type="checkbox" />
                <span className="mr-2"></span>
              </span>
              <span className='text-white md:w-96 sm:w-72'>
                Keep me logged in
              </span>
            </label>
            <a className="text-[#1890ff] decoration-inherit" href="/react/strikingdash/forgotPassword">Forgot password?</a>
          </div>
          <p className="text-white text-center text-sm md:pb-4 sm:pb-5">
            Have you account?
            <a aria-current="page" className="text-[#1890ff] no-underline ml-2" href="/react/strikingdash/">
              Sign up now
            </a>
          </p>
          <div className="flex items-center justify-between my-5">
            <button type="submit" className="m-2 shadow-lg font-medium text-[14px] border-box text-white bg-secondary hover:bg-[#823cf1] focus:shadow-outline focus:outline-none px-9 w-full h-[2.8rem] rounded-[10px]">
              <span>Sign In</span>
            </button>
          </div>
          <div className='mx-2'>
            <GoogleLogin
              clientId='750233282526-gfhofd3al0qtodt7or56vv1mtngofpn8.apps.googleusercontent.com'
              className="custom-google-login"
              onSuccess={responseGoogleSuccess}
              onFailure={responseGoogleFailure}
              cookiePolicy={'single_host_origin'}
              redirectUri='http://localhost:3000/api/auth/callback/google'
                />
          </div>
        </form>
      </div>
    </div>
  </div>
  );
};

export default LoginForm;