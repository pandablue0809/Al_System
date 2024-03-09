import React, { useEffect, useState } from 'react';
import PasswordInput from '../../input/passwordInput';
import PasswordConfirm from '../../input/PasswordConfirm';
import EmailInput from '../../input/EmailInput';
import { isValidPhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import PhoneNumberInput from '../../input/PhoneNumberInput';
import RoleSelect from '../../input/RoleSelect';
import GoogleButton from 'react-google-button';

const SignUpForm: React.FC = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [selectedRoles, setSelectedRoles] = useState<string>('');

  const handleSelectRoles = (selectedRoles: string) => {
    setSelectedRoles(selectedRoles);
  };

  const handlePhoneNumberChange = (value: string) => {
    setPhoneNumber(value);
  };

  const handleSubmit = () => {
    return 'k';
  };

  const responseGoogleSuccess = (response: any) => {
    console.log(response);
  };

  const responseGoogleFailure = (response: any) => {
    console.log(response);
  };

  return (
    <div className='auth_back bg-[#010311] flex flex-col h-screen justify-center flex-wrap content-center min-h-screen xs:h-auto'>
      <div className='first-line:items-center xl:mr-[36rem]'>
        <h1 className="md:text-left mb-3 text-white text-center text-[24px] font-semibold style={{fontFamily: 'Poppins'}}">
          Sign up to
          <span className='text-[#ff69a5]'>Admin</span>
        </h1>
        <div className='items-center flex justify-center bg-black bg-opacity-60 rounded-lg shadow-orange-200 lg:px-20 md:px-10 px-4 xl:px-24 py-10 align-middle'>
          <form onSubmit={handleSubmit}>
            <label className='requireLabel'>Username</label>
            <div className='m-2 grid grid-cols-11'>
              <input
                type='text'
                placeholder='First Name'
                className={`col-span-5 relative px-4 border py-[6px] border-gray-300 rounded-md focus:outline-none focus:border-[#8c94ff]`}
              />
              <div className='col-span-1' />
              <input
                type='text'
                placeholder='Last Name'
                className={`col-span-5 relative px-4 border py-[6px] border-gray-300 rounded-md focus:outline-none focus:border-[#8c94ff]`}
              />
            </div>

            <label className='requireLabel'>Role</label>
            <RoleSelect onSelectRole={handleSelectRoles} />

            <label className='requireLabel'>Phone Number</label>
            <PhoneNumberInput phoneNumber={phoneNumber} handlePhoneNumberChange={handlePhoneNumberChange} />

            <label className='requireLabel'>Email</label>
            <EmailInput value={email} onChange={setEmail} />

            <label className='requireLabel'>Password</label>

            <PasswordInput isSignUp={true} value={password} onChange={setPassword} />

            <label className='requireLabel'>Password Confirm</label>
            <PasswordConfirm value={password} />

            <label className='flex item-center ml-2'>
              <span>
                <input type='checkbox' />
                <span className='mr-2'></span>
              </span>
              <span className='text-white w-full text-sm place-items-center'>I agree with our Terms of Service and Privacy Policy</span>
            </label>
            <p className='text-white text-center text-sm'>
              Already have an account?
              <a aria-current='page' className='text-[#1890ff] no-underline ml-1' href='/react/strikingdash/'>
                Sign In
              </a>
            </p>
            <div className='flex items-center justify-between my-5'>
              <button
                type='submit'
                className='m-2 shadow-lg font-medium text-[16px] border-box text-white bg-secondary hover:bg-[#823cf1] focus:shadow-outline focus:outline-none px-9 w-full h-[2.8rem] rounded-[10px]'>
                <span>Create Account</span>
              </button>
            </div>
            <div className='mx-2'>
              <GoogleButton
                label='Sign up with Google'
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

export default SignUpForm;
