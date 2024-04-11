import React, { useEffect, useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'; // Import the styles if you haven't already
import { isValidPhoneNumber } from 'react-phone-number-input';
import { FaCheck } from 'react-icons/fa6';

interface PhoneNumberInputProps {
  phoneNumber: string;
  handlePhoneNumberChange: (value: string) => void;
  setPhoneNumberValidatedStatus: (value: boolean) => void;
  verified?: boolean;
}

const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({ phoneNumber, handlePhoneNumberChange, setPhoneNumberValidatedStatus, verified }) => {
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(false);
  const [isPhoneNumberNull, setIsPhoneNumberNull] = useState(true);
  const [isVerified, setIsVerified] = useState(verified || false);

  useEffect(() => {
    phoneNumber ? setIsPhoneNumberValid(isValidPhoneNumber(phoneNumber)) : setIsPhoneNumberValid(false);
    phoneNumber === undefined || phoneNumber === '' ? setIsPhoneNumberNull(true) : setIsPhoneNumberNull(false);
  }, [phoneNumber]);

  useEffect(() => {
    setPhoneNumberValidatedStatus && setPhoneNumberValidatedStatus(isPhoneNumberValid);
    if (!isPhoneNumberValid) setIsVerified(false);
  }, [isPhoneNumberValid]);

  return (
    <div className='m-2'>
      <div className='relative w-full'>
        <PhoneInput
          placeholder='Enter phone number'
          international
          countryCallingCodeEditable={false}
          defaultCountry='US'
          className={`px-4 rounded-md w-full pr-8 bg-white input-phone-number py-[0.5px]`}
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
        />

        <p className='text-xs text-red-600'>&nbsp;{!isPhoneNumberValid && !isPhoneNumberNull && 'Please provide a valid phone number.'}</p>
        {isVerified && (
          <p className='text-green-500 flex flex-row items-center pt-1'>
            <FaCheck className='mr-2' /> Verified
          </p>
        )}
      </div>
    </div>
  );
};

export default PhoneNumberInput;
