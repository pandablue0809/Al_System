import React, { ChangeEvent, useEffect, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export type PasswordConfirmProps = {
  value?: string;
  setPasswordConfirmedStatus?: (newValue: boolean) => void;
};

const PasswordConfirm: React.FC<PasswordConfirmProps> = ({ value, setPasswordConfirmedStatus }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPasswordNull, setIsPasswordNull] = useState(false);

  useEffect(() => {
    confirmPassword === '' ? setIsPasswordNull(true) : setIsPasswordNull(false);
    value === confirmPassword && confirmPassword !== '' ? setIsPasswordValid(true) : setIsPasswordValid(false);
  }, [confirmPassword]);

  useEffect(() => {
    setPasswordConfirmedStatus && setPasswordConfirmedStatus(isPasswordValid);
  }, [isPasswordValid]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newPassword = event.target.value;
    setConfirmPassword(newPassword);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const renderPasswordVisibilityToggle = () => {
    if (showPassword) {
      return (
        <FaEyeSlash className='absolute top-5 right-3 transform -translate-y-1/2 cursor-pointer text-gray-500' onClick={togglePasswordVisibility} />
      );
    } else {
      return <FaEye className='absolute top-5 right-3 transform -translate-y-1/2 cursor-pointer text-gray-500' onClick={togglePasswordVisibility} />;
    }
  };

  return (
    <div className='m-2 mb-3'>
      <div className='relative w-full'>
        <input
          type={showPassword ? 'text' : 'password'}
          value={confirmPassword}
          onChange={handleChange}
          className={`px-4 py-2 border border-gray-300 rounded-md focus:outline-none w-full pr-8 ${
            isPasswordValid ? 'focus:border-green-600' : isPasswordNull ? 'focus:border-[#8c94ff]' : 'focus:border-red-600'
          }`}
        />
        {renderPasswordVisibilityToggle()}
      </div>

      <p className='text-xs text-red-600'>&nbsp;{!isPasswordValid && !isPasswordNull && 'Please provide the correct password for confirmation.'}</p>
    </div>
  );
};

export default PasswordConfirm;
