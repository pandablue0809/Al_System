import React from 'react';

import { Button } from '@mui/material';

import { IoIosSave } from 'react-icons/io';
import { TiCancelOutline } from 'react-icons/ti';

const MyProfile: React.FC = () => {
  return (
    <div className='flex flex-col gap-10 my-3'>
      <div className='flex flex-col gap-2'>
        <span className='font-bold text-xl text-white'>My profile</span>
        <div>
          <label className='text-md text-blue-400'>About me</label>
          <textarea className='w-full rounded-md text-gray-700 mt-2' rows={3} placeholder='Please provide information about yourself.' />
        </div>
      </div>
      <div className='flex flex-col gap-2'>
        <span className='font-bold text-xl text-white'>Social Link</span>
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-5'>
          <div>
            <label className='text-md text-blue-400'>Linkedin</label>
            <input
              placeholder='Linkedin'
              type='text'
              className={`px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#8c94ff] w-full pr-8`}
            />
          </div>
          <div>
            <label className='text-md text-blue-400'>Facebook</label>
            <input
              placeholder='Facebook'
              type='text'
              className={`px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#8c94ff] w-full pr-8`}
            />
          </div>
        </div>
      </div>
      <div className='flex justify-around mt-5'>
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

export default MyProfile;
