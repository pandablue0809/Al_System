import React, { useState } from 'react';

import PasswordInput from '../../../../input/passwordInput';
import PasswordConfirm from '../../../../input/PasswordConfirm';
import PhoneNumberInput from '../../../../input/PhoneNumberInput';
import EmailInput from '../../../../input/EmailInput';

import { Switch, Button } from '@mui/material';

import { IoIosSave } from 'react-icons/io';
import { TiCancelOutline } from 'react-icons/ti';

export type PersonalInfoFormValues = {
  password?: string;
};

const SecuritySetting: React.FC<PersonalInfoFormValues> = () => {
  const [newPassword, setNewPassword] = useState('');
  const [isSelected, setIsSelected] = React.useState(true);
  const [phoneNumber, setPhoneNumber] = useState('+1 484 847 3628');
  const [phoneNumberValidatedStatus, setPhoneNumberValidatedStatus] = useState(true);
  const [emailVerified, setEmailVerified] = useState(true);

  const handlePhoneNumberChange = (value: string) => {
    setEmailVerified(true);
    setPhoneNumber(value);
  };

  const handleSelect = () => {
    setIsSelected(!isSelected);
  };

  return (
    <div>
      <div className='grid lg:grid-cols-2 gap-8'>
        <div>
          <span className='font-bold text-xl text-white'>Change Password</span>
          <div className='grid lg:grid-rows-3 gap-5 mb-10 mt-5'>
            <div>
              <label className='text-md text-blue-400'>Current Password</label>
              <PasswordInput />
            </div>
            <div>
              <label className='text-md text-blue-400'>New Password</label>
              <PasswordInput onChange={setNewPassword} isSignUp />
            </div>
            <div>
              <label className='text-md text-blue-400'>Confirm Password</label>
              <PasswordConfirm value={newPassword} />
            </div>
          </div>
        </div>

        <div>
          <div className='flex justify-between'>
            <span className='font-bold text-xl text-white'>Two–factor authentication</span>
            <Switch checked={isSelected} onChange={handleSelect} />
          </div>
          {isSelected && (
            <div className={`grid lg:grid-rows-2 ${emailVerified ? 'gap-3' : 'gap-8'}  mb-10 mt-3`}>
              <div>
                <label className='text-md text-blue-400'>Phone</label>
                <PhoneNumberInput
                  setPhoneNumberValidatedStatus={setPhoneNumberValidatedStatus}
                  phoneNumber={phoneNumber}
                  handlePhoneNumberChange={handlePhoneNumberChange}
                  verified={phoneNumberValidatedStatus}
                />
              </div>
              <div className='mt-2'>
                <label className='text-md text-blue-400'>Email</label>
                <EmailInput verified={emailVerified} value='sotru.contact@gmail.com' />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className='flex justify-around'>
        <Button
          variant='outlined'
          startIcon={<TiCancelOutline />}
          className='flex w-[30%]'
          sx={{ backgroundColor: 'red', color: 'white', border: 'none' }}>
          Cancel
        </Button>
        <Button
          variant='outlined'
          startIcon={<IoIosSave />}
          sx={{ backgroundColor: 'green', color: 'white', border: 'none' }}
          className='flex w-[30%]'>
          Save
        </Button>
      </div>
    </div>
  );
};

export default SecuritySetting;
