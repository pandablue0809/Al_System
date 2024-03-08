import React, { ChangeEvent, useEffect, useState } from 'react';
import { FaEye, FaEyeSlash} from 'react-icons/fa';

export type PasswordConfirmProps = {
  value?: string;
  
}

const PasswordConfirm: React.FC<PasswordConfirmProps> = ({ value }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [isPasswordValid, setIsPasswordValid] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isPasswordNull, setIsPasswordNull] = useState(false);

    useEffect(() => {
      confirmPassword === '' ? setIsPasswordNull(true) : setIsPasswordNull(false) 
      value === confirmPassword ? setIsPasswordValid(true) : setIsPasswordValid(false)
  }, [confirmPassword]);

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
    <div className="md:w-[341px] sm:w-[341px] m-2">
      <div className="relative w-full">
        <input
          type={showPassword ? 'text' : 'password'}
          value={confirmPassword}
                  onChange={handleChange}
                  className={`px-4 py-2 border border-gray-300 rounded-md focus:outline-none w-full pr-8 
                            ${isPasswordValid 
                                ? 'border-green-600'
                                : isPasswordNull
                                ? 'focus:border-[#8c94ff]'
                                : 'border-red-600'
                      }`}
                  
        />
        {renderPasswordVisibilityToggle()}
      </div>
      {!isPasswordValid && !isPasswordNull &&
        <p className='text-xs'>Please provide the correct password for confirmation.</p>
      }
       
    </div>
  );
};

export default PasswordConfirm;