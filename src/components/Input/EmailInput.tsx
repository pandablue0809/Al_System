import React, { ChangeEvent, useEffect, useState } from 'react';

export type EmailInputProps = {
  value?: string;
  onChange?: (newValue: string) => void;
}

const EmailInput: React.FC<EmailInputProps> = ({ value, onChange }) => {
    const [email, setEmail] = useState(value || '');
    const [isValid, setIsValid] = useState(false);

  useEffect(() => {
        onChange && onChange(email);
        isValid ? console.log('valid') : console.log("unvalid")
    }, [email, onChange]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      const newEmail = event.target.value;
      setEmail(newEmail);

      const isValidEmail = /\S+@\S+\.\S+/.test(newEmail);
      setIsValid(isValidEmail);
    };

  return (
    <div className="md:w-96 sm:w-72 m-2">
      <div className="relative w-full">
        <input
          type='text'
          value={email}
          onChange={handleChange}
          className={`px-4 py-2 border border-gray-300 rounded-md focus:outline-none ${isValid? 'border-green-500' : email === "" ? 'focus:border-[#8c94ff]' : 'border-red-500'}
            w-full pr-8`}
        />        
        </div>
      </div>
  );
};

export default EmailInput;

