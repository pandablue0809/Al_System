import React, { ReactComponentElement, useCallback, useEffect, useMemo, useState } from 'react';
// import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import { Radio, RadioGroup } from '@nextui-org/react';
import PasswordInput from '../../../../input/passwordInput';
import PasswordConfirm from '../../../../input/PasswordConfirm';
import { Switch } from '@nextui-org/react';
import PhoneNumberInput from '../../../../input/PhoneNumberInput';
import EmailInput from '../../../../input/EmailInput';

export type PersonalInfoFormValues = {
  password?: String;
};

const SecuritySetting: React.FC<PersonalInfoFormValues> = ({ password }) => {
  const [country, setCountry] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [isSelected, setIsSelected] = React.useState(true);
  const [phoneNumber, setPhoneNumber] = useState('+1 484 847 3628');
  const [selected, setSelected] = React.useState('phone');
  const [phoneNumberValidatedStatus, setPhoneNumberValidatedStatus] = useState(false);
  const [emailVerified, setEmailVerified] = useState(true);

  const handlePhoneNumberChange = (value: string) => {
    setPhoneNumber(value);
  };

  return (
    <div className='grid lg:grid-cols-2 gap-8'>
      <div>
        <span className='font-bold text-xl text-white'>Change Password</span>
        <div className='grid lg:grid-rows-3  gap-8 mb-10 mt-5'>
          <div>
            <label className='text-lg text-blue-400'>Current Password</label>
            <PasswordInput />
          </div>
          <div>
            <label className='text-lg text-blue-400'>New Password</label>
            <PasswordInput onChange={setNewPassword} isSignUp />
          </div>
          <div>
            <label className='text-lg text-blue-400'>Confirm Password</label>
            <PasswordConfirm value={newPassword} />
          </div>
        </div>
      </div>

      <div>
        <div className='flex justify-between'>
          <span className='font-bold text-xl text-white'>Two–factor authentication</span>
          <Switch isSelected={isSelected} onValueChange={setIsSelected}></Switch>
        </div>
        {isSelected && (
          <RadioGroup value={selected} onValueChange={setSelected}>
            <div className={`grid lg:grid-rows-2 ${emailVerified ? 'gap-3' : 'gap-8'}  mb-10 mt-5`}>
              <div>
                <Radio value='phone'>
                  <label className='text-lg text-blue-400'>phone</label>
                </Radio>
                <PhoneNumberInput
                  setPhoneNumberValidatedStatus={setPhoneNumberValidatedStatus}
                  phoneNumber={phoneNumber}
                  handlePhoneNumberChange={handlePhoneNumberChange}
                />
              </div>
              <div className='mt-2'>
                <Radio value='Email'>
                  <label className='text-lg text-blue-400'>Email</label>
                </Radio>
                <EmailInput verified={emailVerified} />
              </div>
            </div>
          </RadioGroup>
        )}
      </div>
    </div>
  );
};

export default SecuritySetting;
