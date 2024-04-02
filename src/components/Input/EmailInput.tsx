import React, { ChangeEvent, useEffect, useState } from 'react';
import { FaCheck } from 'react-icons/fa6';

export type EmailInputProps = {
  value?: string;
  onChange?: (newValue: string) => void;
  setEmailValidatedStatus?: (newValue: boolean) => void;
  verified?: boolean;
};

const EmailInput: React.FC<EmailInputProps> = ({ value, onChange, setEmailValidatedStatus, verified }) => {
  const [email, setEmail] = useState(value || '');
  const [isValid, setIsValid] = useState(false);
  const [isVerified, setIsVerified] = useState(verified || false);

  useEffect(() => {
    onChange && onChange(email);
    setEmailValidatedStatus && setEmailValidatedStatus(isValid);
  }, [email]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newEmail = event.target.value;
    setEmail(newEmail);

    const isValidEmail = /\S+@\S+\.\S+/.test(newEmail);
    setIsValid(isValidEmail);
  };

  return (
    <div className='m-2 mb-3'>
      <div className='relative w-full'>
        <input
          type='text'
          value={email}
          onChange={handleChange}
          className={`px-4 py-[9px] border border-none ${isVerified ? 'border-green-500' : 'border-gray-300'} rounded-md ${isValid ? 'focus:border-green-500' : email === '' ? 'focus:border-[#8c94ff]' : 'focus:border-red-500'}
            w-full pr-8`}
        />
        {isVerified && (
          <p className='text-green-500 flex flex-row items-center pt-1'>
            <FaCheck className='mr-2' /> Verified
          </p>
        )}
      </div>
    </div>
  );
};

export default EmailInput;
