import React, { useState } from 'react';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import PhoneNumberInput from '../../../../input/PhoneNumberInput';
import EmailInput from '../../../../input/EmailInput';
import { Button } from '@mui/material';
import { IoIosSave } from 'react-icons/io';
import { TiCancelOutline } from 'react-icons/ti';

const PersonalInfo: React.FC = () => {
  const [country, setCountry] = useState('');
  const [region, setRegion] = useState('');
  const [phoneNumberValidatedStatus, setPhoneNumberValidatedStatus] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState('+1 484 847 3628');

  const handlePhoneNumberChange = (value: string) => {
    setPhoneNumber(value);
  };

  return (
    <div className='flex flex-col gap-5'>
      <div>
        <span className='font-bold text-xl text-white'>Personal Info</span>
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-5 my-3'>
          <div>
            <label className='text-md text-blue-400'>First Name</label>
            <input
              placeholder='First Name'
              type='text'
              defaultValue='Alexandru'
              className={`px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#8c94ff] w-full pr-8`}
            />
          </div>
          <div>
            <label className='text-md text-blue-400'>Last Name</label>
            <input
              type='text'
              defaultValue='Suteu'
              className={`px-4 py-2  mt-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#8c94ff] w-full pr-8`}
            />
          </div>
          <div>
            <label className='text-md text-blue-400'>User Name</label>
            <input
              defaultValue='devlegend'
              type='text'
              placeholder='User Name'
              className={`px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#8c94ff] w-full pr-8`}
            />
          </div>
        </div>
      </div>
      <div>
        <span className='font-bold text-xl text-white'>Contact Info</span>
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-1 my-3'>
          <div>
            <label className='text-md text-blue-400'>Phone</label>
            <PhoneNumberInput
              setPhoneNumberValidatedStatus={setPhoneNumberValidatedStatus}
              phoneNumber={phoneNumber}
              handlePhoneNumberChange={handlePhoneNumberChange}
              verified={phoneNumberValidatedStatus}
            />
          </div>
          <div>
            <label className='text-md text-blue-400'>Email</label>
            <EmailInput verified={true} value='sotru.contact@gmail.com' />
          </div>
        </div>
      </div>

      <div>
        <span className='font-bold text-xl text-white mt-3'>Address</span>
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-5 my-3'>
          <div>
            <label className='text-md text-blue-400'>Country</label>
            <CountryDropdown
              classes='px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#8c94ff] w-full pr-8'
              value={country}
              onChange={setCountry}
            />
          </div>
          <div>
            <label className='text-md text-blue-400'>Region</label>
            <RegionDropdown
              classes='px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#8c94ff] w-full pr-8'
              country={country}
              value={region}
              onChange={setRegion}
            />
          </div>
          <div>
            <label className='text-md text-blue-400 mt-3'>Address</label>
            <input
              type='text'
              placeholder='Address'
              className={`px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#8c94ff] w-full pr-8`}
            />
          </div>
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

export default PersonalInfo;
