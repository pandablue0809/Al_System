import React, { ReactComponentElement, useCallback, useEffect, useMemo, useState } from 'react';
import { DatePicker, Select } from 'antd';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import PhoneNumberInput from '../../../../input/PhoneNumberInput';
import EmailInput from '../../../../input/EmailInput';

export type PersonalInfoFormValues = {
  birthday?: string;
  lastName: string;
  country?: string;
  website: string;
  city?: string;
  address2: string;
  nickName: string;
  address1: string;
  sex?: string;
  facebook: string;
  language?: string;
  linkedin: string;
  zipcode: string;
  firstName: string;
  twitter: string;
  phone: string;
  email: string;
};

const PersonalInfo = () => {
  const [country, setCountry] = useState('');
  const [region, setRegion] = useState('');

  useEffect(() => {
    console.log(region, ' ', country);
  }, [region, country]);

  const [phoneNumberValidatedStatus, setPhoneNumberValidatedStatus] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('+1 484 847 3628');

  const handlePhoneNumberChange = (value: string) => {
    setPhoneNumber(value);
  };

  return (
    <div>
      <span className='font-bold text-xl text-white'>Personal Info</span>
      <div className='grid lg:grid-cols-2 grid-cols-1 gap-8 mb-10 mt-5'>
        <div>
          <label className='text-lg text-blue-400'>First Name</label>
          <input
            placeholder='First Name'
            type='text'
            className={`px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#8c94ff] w-full pr-8`}
          />
        </div>
        <div>
          <label className='text-lg text-blue-400'>Last Name</label>
          <input
            type='text'
            placeholder='Last Name'
            className={`px-4 py-2  mt-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#8c94ff] w-full pr-8`}
          />
        </div>
        <div>
          <label className='text-lg text-blue-400'>User Name</label>
          <input
            type='text'
            placeholder='User Name'
            className={`px-4 py-2  mt-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#8c94ff] w-full pr-8`}
          />
        </div>
        <div>
          <label className='text-lg text-blue-400'>First Name</label>
          <select className={`px-4 py-2  mt-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#8c94ff] w-full pr-8`}>
            <option value='male'>Male</option>
            <option value='female'>Female</option>
          </select>
        </div>
        <div>
          <label className='text-lg text-blue-400'>Birthday</label>
          <DatePicker
            type='Date'
            placeholder='Birthday'
            className={`px-4 py-2 mt-2 border bg-[#3B3B3B] text-white focus:text-black border-gray-300 rounded-md focus:outline-none focus:border-[#8c94ff] w-full pr-8`}
          />
        </div>
      </div>

      <span className='font-bold text-xl text-white'>Contact Info</span>
      <div className='grid lg:grid-cols-2 grid-cols-1 gap-8 mt-5 mb-10'>
        <div>
          <label className='text-lg text-blue-400'>Phone</label>
          <PhoneNumberInput
            setPhoneNumberValidatedStatus={setPhoneNumberValidatedStatus}
            phoneNumber={phoneNumber}
            handlePhoneNumberChange={handlePhoneNumberChange}
          />
        </div>
        <div>
          <label className='text-lg text-blue-400'>Email</label>
          <EmailInput verified={true} />
        </div>
      </div>

      <span className='font-bold text-xl text-white'>Address</span>
      <div className='grid lg:grid-cols-2 grid-cols-1 gap-8 mt-5 mb-10'>
        <div>
          <label className='text-lg text-blue-400'>Country</label>
          <CountryDropdown
            classes='px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#8c94ff] w-full pr-8'
            value={country}
            onChange={setCountry}
          />
        </div>
        <div>
          <label className='text-lg text-blue-400'>Region</label>
          <RegionDropdown
            classes='px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#8c94ff] w-full pr-8'
            country={country}
            value={region}
            onChange={setRegion}
          />
        </div>
        <div>
          <label className='text-lg text-blue-400'>Address</label>
          <input
            type='text'
            placeholder='Address'
            className={`px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#8c94ff] w-full pr-8`}
          />
        </div>
      </div>

      <span className='font-bold text-xl text-white'>Social Link</span>
      <div className='grid lg:grid-cols-2 grid-cols-1 gap-8 mt-5 mb-10'>
        <div>
          <label className='text-lg text-blue-400'>Linkedin</label>
          <input
            placeholder='Linkedin'
            type='text'
            className={`px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#8c94ff] w-full pr-8`}
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
