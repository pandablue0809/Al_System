import React from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'; // Import the styles if you haven't already
import { isValidPhoneNumber } from 'react-phone-number-input';

interface PhoneNumberInputProps {
  phoneNumber: string;
  handlePhoneNumberChange: (value: string) => void;
}

const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({ phoneNumber, handlePhoneNumberChange }) => {
  const isPhoneNumberValid = phoneNumber ? isValidPhoneNumber(phoneNumber) : false;
  const isPhoneNumberNull = (phoneNumber === undefined || phoneNumber === '') ? true : false;

  return (
   <div className="m-2">
      <div className="relative w-full">
      <PhoneInput
        placeholder="Enter phone number"
        international
        countryCallingCodeEditable={false}
        defaultCountry="US"
        className={`px-4 py-2 rounded-md w-full pr-8 bg-white input-phone-number`}
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
      />
     
         <p className='text-xs text-red-600'>
           &nbsp;{!isPhoneNumberValid && !isPhoneNumberNull && 'Please provide a valid phone number.' }
        </p>
    
      </div>
      </div>
  );
}

export default PhoneNumberInput;