import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'react-phone-number-input/style.css';
import { Checkbox, Button } from '@mui/material';
import { toast } from 'react-toastify';

import PasswordInput from '../../input/passwordInput';
import PasswordConfirm from '../../input/PasswordConfirm';
import EmailInput from '../../input/EmailInput';
import PhoneNumberInput from '../../input/PhoneNumberInput';
import RoleSelect from '../../input/RoleSelect';

import { useAppSelector, useAppDispatch } from '../../../hooks/useReduxHooks';
import { doSignUp } from '../../../store/slices/authSlice';

import { IoMailOpenOutline } from 'react-icons/io5';

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
  const [isAgree, setIsAgree] = useState<boolean>(false);

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
    <div className='auth_back bg-[#010311] flex flex-col h-screen justify-center flex-wrap content-center min-h-screen xs:h-auto'>
      <div className='first-line:items-center xl:mr-[36rem]'>
        <h1 className="md:text-left mb-3 text-white text-center text-[24px] font-semibold style={{fontFamily: 'Poppins'}}">
          Sign up to
          <span className='text-[#ff69a5]'>Admin</span>
        </h1>
        <div className='items-center flex justify-center bg-black bg-opacity-60 rounded-lg shadow-orange-200 lg:px-20 md:px-10 px-4 xl:px-24 py-10 align-middle'>
          <div>
            <label className='requireLabel'>Username</label>
            <div className='m-2 grid grid-cols-11'>
              <input
                type='text'
                placeholder='First Name'
                className={`col-span-5 relative px-4 border py-[6px] border-gray-300 rounded-md focus:outline-none focus:border-[#8c94ff]`}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <div className='col-span-1' />
              <input
                type='text'
                placeholder='Last Name'
                className={`col-span-5 relative px-4 border py-[6px] border-gray-300 rounded-md focus:outline-none focus:border-[#8c94ff]`}
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

            <label className='flex item-center ml-2'>
              {/* <Checkbox size='small'> */}
                <span className='text-white'>I agree with our Terms of Service and Privacy Policy</span>
              {/* </Checkbox> */}
            </label>
            <p className='text-white text-center text-sm'>
              Already have an account?
              <Link to='/auth/login' aria-current='page' className='text-[#1890ff] no-underline ml-1'>
                Sign In
              </Link>
            </p>
            <div className='flex items-center justify-between my-5'>
              <Button color='secondary' onClick={handleSubmit}>
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
