import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { Checkbox, Button } from '@mui/material';
import { toast } from 'react-toastify';

import { useAppSelector, useAppDispatch } from '../../../hooks/useReduxHooks';
import { doSignUp } from '../../../store/slices/authSlice';

import PasswordInput from '../../common/input/PasswordInput';
import PasswordConfirm from '../../common/input/PasswordConfirm';
import EmailInput from '../../common/input/EmailInput';
import PhoneNumberInput from '../../common/input/PhoneNumberInput';
import RoleSelect from '../../common/input/RoleSelect';

import { IoMailOpenOutline } from 'react-icons/io5';

import 'react-phone-number-input/style.css';

type Error = {
  firstName?: string;
  lastName?: string;
  role?: string;
  phoneNumber?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
};

const SignUpForm: React.FC = () => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [selectedRoles, setSelectedRoles] = useState<string>('User');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  //This variables is used to get each components' validations status
  const [phoneNumberValidatedStatus, setPhoneNumberValidatedStatus] = useState<boolean>(false);
  const [emailValidatedStatus, setEmailValidatedStatus] = useState<boolean>(false);
  const [securityStatus, setSecurityStatus] = useState<boolean>(false);
  const [passwordConfirmedValidatedStatus, setPasswordConfirmedValidatedStatus] = useState<boolean>(false);

  const { register_success } = useAppSelector((state) => state.auth);
  //This variable is used to display a loading icon on the button when clicked.
  const [loading, setLoading] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const handleSubmit = () => {
    const error_message: Error = {};

    if (!firstName) {
      error_message.firstName = 'FirstName';
    }
    if (!lastName) {
      error_message.lastName = 'LastName';
    }
    if (!phoneNumberValidatedStatus) {
      error_message.phoneNumber = 'PhoneNumber';
    }
    if (!emailValidatedStatus) {
      error_message.email = 'Email';
    }
    if (!securityStatus) {
      error_message.password = 'Password';
    }
    if (!passwordConfirmedValidatedStatus) {
      error_message.confirmPassword = 'ConfirmPassword';
    }

    if (Object.keys(error_message).length === 0) {
      if (securityStatus && passwordConfirmedValidatedStatus) {
        setLoading(() => true);
        dispatch(
          doSignUp({
            firstName: firstName,
            lastName: lastName,
            user_type: selectedRoles,
            phoneNumber: phoneNumber,
            email: email,
            password: password,
          }),
        );
        setLoading(() => false);
      }
    } else {
      let message = '';
      Object.values(error_message).map((content) => {
        message = message.concat(' ', content);
      });
      toast.error(`Invalid${message} value`);
    }
  };

  const unregisteredComponent = (
    <div className='relative w-full pb-[110px] md:pb-[40px] md:pt-0 bg-main-background dark:bg-main-background-dark bg-center bg-cover transition-all duration-1000 flex flex-col h-screen justify-center flex-wrap content-center'>
      <div
        id='main-lefttop'
        className='absolute top-[100px] right-0 w-[232px] h-[130px] md:top-[210px] md:left-[10%] md:w-[464px] md:h-[260px] bg-main-lefttop dark:bg-main-lefttop-dark bg-center bg-cover'></div>
      <div
        id='main-leftbottom'
        className='absolute top-[10%] right-0 w-[300px] h-[290px] md:bottom-0 md:left-[10%] md:w-[672px] md:h-[633px] bg-main-leftbottom dark:bg-main-leftbottom-dark bg-center bg-cover'></div>
      <div
        id='main-righttop'
        className='absolute bottom-0 right-0 w-[300px] h-[325px] md:top-[71px] md:right-[12px] md:w-[750px] md:h-[797px] bg-main-righttop dark:bg-main-righttop-dark bg-center bg-cover'></div>
      <div
        id='main-center'
        className='absolute left-[-70px] top-[20%] w-[275px] h-[225px] xl:left-[calc(50%-100px)] md:left-[calc(55%-800px)] md:top-[calc(50%-170px)] md:w-[550px] md:h-[450px] bg-main-center dark:bg-main-center-dark bg-center bg-cover pointer-events-none z-20'></div>

      <div className='first-line:items-center xl:mr-[36rem] z-10 xl:pt-10 lg:pt-20 pt-[100px]'>
        <h1 className="md:text-left mb-3 text-white text-center text-[24px] font-semibold style={{fontFamily: 'Poppins'}}">
          Sign up to
          <span className='text-[#ff69a5]'> Admin</span>
        </h1>
        <div className='items-center flex justify-center bg-black bg-opacity-60 rounded-lg shadow-orange-200 lg:px-20 md:px-10 px-4 xl:px-24 py-10 align-middle'>
          <div>
            <label className='requireLabel'>Username</label>
            <div className='m-2 grid grid-cols-11'>
              <input
                type='text'
                placeholder='First Name'
                className={`col-span-5 relative px-4 border py-[8px] border-gray-300 rounded-md focus:outline-none focus:border-[#8c94ff]`}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <div className='col-span-1' />
              <input
                type='text'
                placeholder='Last Name'
                className={`col-span-5 relative px-4 border py-[8px] border-gray-300 rounded-md focus:outline-none focus:border-[#8c94ff]`}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <label className='requireLabel'>Role</label>
            <RoleSelect onSelectRole={setSelectedRoles} />

            <label className='requireLabel'>Phone Number</label>
            <PhoneNumberInput
              setPhoneNumberValidatedStatus={setPhoneNumberValidatedStatus}
              phoneNumber={phoneNumber}
              handlePhoneNumberChange={setPhoneNumber}
            />

            <label className='requireLabel'>Email</label>
            <EmailInput value={email} onChange={setEmail} setEmailValidatedStatus={setEmailValidatedStatus} />

            <label className='requireLabel'>Password</label>

            <PasswordInput isSignUp={true} setSecurityStatus={setSecurityStatus} value={password} onChange={setPassword} />

            <label className='requireLabel'>Password Confirm</label>
            <PasswordConfirm setPasswordConfirmedStatus={setPasswordConfirmedValidatedStatus} value={password} />

            <div className='flex item-center ml-2 items-center'>
              <Checkbox size='small' />
              <span className='text-white'>I agree with our Terms of Service and Privacy Policy</span>
            </div>
            <p className='text-white text-center text-sm'>
              Already have an account?
              <Link to='/auth/login' aria-current='page' className='text-[#1890ff] no-underline ml-1'>
                Sign In
              </Link>
            </p>
            <div className='flex items-center justify-between my-5'>
              <Button
                onClick={handleSubmit}
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
                  height: '2.6rem',
                  borderRadius: '5px',
                }}>
                <span>Create Account</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const registeredComponent = (
    <div className='w-screen h-screen items-center text-center'>
      <div
        className='container'
        style={{
          display: 'flex',
          top: '50%',
          left: '50%',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          flexDirection: 'column',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
        }}>
        <IoMailOpenOutline className='w-24 h-24' />
        <h2 className='w-1/2 h-1/2 text-3xl'>Verify your email to continue</h2>
        <span color='#14a800' style={{ width: '50%' }}>
          We just sent an email to the address:<p className='font-medium'> {email}</p>
          <br />
          Please check your email and select the link provided to verify your address.
        </span>
      </div>
    </div>
  );

  return <>{register_success ? registeredComponent : unregisteredComponent}</>;
};

export default SignUpForm;
