import React, { useState } from 'react';
import { Button } from '@nextui-org/react';
import { Link } from 'react-router-dom';
import PasswordInput from '../../input/passwordInput';
import PasswordConfirm from '../../input/PasswordConfirm';

import { notificationController } from '../../../controllers/notificationController';

type Error = {
  password?: string;
  confirmPassword?: string;
};

const CreateNewPassword: React.FC = () => {
  const [password, setPassword] = useState<string>('');

  const [loading, setLoading] = useState<boolean>(false);
  const [passwordConfirmedValidatedStatus, setPasswordConfirmedValidatedStatus] = useState<boolean>(false);
  const [securityStatus, setSecurityStatus] = useState<boolean>(false);

  const handleSubmit = () => {
    const error_message: Error = {};

    if (!passwordConfirmedValidatedStatus) {
      error_message.confirmPassword = 'ConfirmPassword';
    }

    if (Object.keys(error_message).length === 0) {
      if (securityStatus && passwordConfirmedValidatedStatus) {
        setLoading(() => true);
        //Please type appropriate code.
        setLoading(() => false);
      }
    } else {
      let message = '';
      Object.values(error_message).map((content) => {
        message = message.concat(' ', content);
      });
      notificationController.error({ message: `Invalid${message} value` });
    }
  };

  return (
    <div className='auth_back bg-[#010311] flex flex-col h-screen justify-center flex-wrap content-center'>
      <div className='first-line:items-center'>
        <div className='items-center flex justify-center bg-black bg-opacity-60 rounded-3xl shadow-orange-200 lg:px-16 px-8 py-32 align-middle '>
          <div>
            <div className='mb-10'>
              <h1 className='md:text-left  text-white text-center text-[24px] font-semibold mb-2' style={{ fontFamily: 'Poppins' }}>
                Create new <span className='text-[#ff69a5] ml-1'>Password</span>
              </h1>
              <p className='ml-2'>Your new password must be different from previous password.</p>
            </div>
            <label className='requireLabel'>Password</label>
            <PasswordInput isSignUp={true} setSecurityStatus={setSecurityStatus} value={password} onChange={setPassword} />
            <label className='requireLabel'>Password Confirm</label>
            <PasswordConfirm setPasswordConfirmedStatus={setPasswordConfirmedValidatedStatus} value={password} />
            <p className='ml-2'>
              Would you like to return to the
              <Link to='/auth/login' aria-current='page' className='text-[#1890ff] no-underline ml-2'>
                login page?
              </Link>
            </p>
            <div className='flex items-center justify-between my-5'>
              <Button
                className='m-2 shadow-lg font-medium text-[16px] border-box text-white px-9 w-full h-[2.8rem] rounded-[10px]'
                isLoading={loading}
                variant='shadow'
                color='secondary'
                onClick={handleSubmit}>
                <span>Reset Password</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateNewPassword;
