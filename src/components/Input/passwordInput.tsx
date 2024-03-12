import React, { ChangeEvent, useEffect, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export type PasswordInputProps = {
  value?: string;
  isSignUp?: boolean;
  onChange?: (newValue: string) => void;
  setSecurityStatus?: (newValue: boolean) => void;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ value, isSignUp, onChange, setSecurityStatus }) => {
  const [password, setPassword] = useState(value || '');
  const [securityLevel, setSecurityLevel] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  
  useEffect(() => {
    setSecurityStatus && setSecurityStatus(securityLevel === 'Strong')
  },[securityLevel])

  useEffect(() => {
    const newSecurityLevel = getSecurityLevel(password);
    setSecurityLevel(newSecurityLevel);
    onChange && onChange(password);
  }, [password, onChange]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

 

  const getSecurityLevel = (password: string): string => {
    let level = 0;
    const lengthRegex = /(?=.{8,})/;
    const lowercaseRegex = /(?=.*[a-z])/;
    const uppercaseRegex = /(?=.*[A-Z])/;
    const numberRegex = /(?=.*[0-9])/;
    const specialCharRegex = /(?=.*[!@#$%^&*])/;

    if (lengthRegex.test(password)) level++;
    if (lowercaseRegex.test(password)) level++;
    if (uppercaseRegex.test(password)) level++;
    if (numberRegex.test(password)) level++;
    if (specialCharRegex.test(password)) level++;

    if (level === 5) {
      return 'Strong';
    } else if (level === 4) {
      return 'Midstrong'
    } else if (level >= 2) {
      return 'Moderate';
    } else {
      return 'Weak';
    }
  };

   const renderPasswordVisibilityToggle = () => {
    if (showPassword) {
      return (
        
        <FaEyeSlash
          className="absolute top-5 right-3 transform -translate-y-1/2 cursor-pointer text-gray-500"
          onClick={togglePasswordVisibility}
        />
      );
    } else {
      return (
        <FaEye
          className="absolute top-5 right-3 transform -translate-y-1/2 cursor-pointer text-gray-500"
          onClick={togglePasswordVisibility}
        />
      );
    }
  };

  return (
    <div className="m-2  mb-3">
      <div className="relative w-full">
        <input  
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={handleChange}
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#8c94ff] w-full pr-8"
        />
        {renderPasswordVisibilityToggle()}
        
        {isSignUp && <><div className="mt-1 grid grid-cols-4 gap-2">
          <div
            className={`h-1 rounded-md ${securityLevel === 'Strong'
                ? 'bg-green-600'
                : securityLevel === 'Midstrong'
                  ? 'bg-yellow-300'
                  : securityLevel === 'Moderate'
                    ? 'bg-orange-600'
                    : password?.length === 0
                      ? 'bg-gray-300'
                      : 'bg-red-600'
              }`}
          ></div>
          <div
            className={`h-1 rounded-md ${securityLevel === 'Strong'
                ? 'bg-green-600'
                : securityLevel === 'Midstrong'
                  ? 'bg-yellow-300'
                  : securityLevel === 'Moderate'
                    ? 'bg-orange-600'
                    : 'bg-gray-300'
              }`}
          ></div>
          <div
            className={` h-1 rounded-md  ${securityLevel === 'Strong'
                ? 'bg-green-600'
                : securityLevel === 'Midstrong'
                  ? 'bg-yellow-300'
                  : ' bg-gray-300'
              }`}
          ></div>
          <div
            className={` h-1 rounded-md  ${securityLevel === 'Strong'
                ? 'bg-green-600' : ' bg-gray-300'
              }`}
          >
          </div>
          
        </div>
          <p className='text-xs text-white'>use 8 or more characters with a mix of letters, numbers & symbols.</p>
        </>
        }
       
      </div>
    </div>
  );
};

export default PasswordInput;