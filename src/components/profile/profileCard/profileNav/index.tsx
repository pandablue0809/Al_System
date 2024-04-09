import React, { useState, useEffect } from 'react';

import { Button } from '@mui/material';

import { AiOutlineSecurityScan } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { ImProfile } from 'react-icons/im';
import { AiOutlineDollar } from 'react-icons/ai';

export type ProfileNavProps = {
  onSetNav?: (newValue: string) => void;
};

export const ProfileNav: React.FC<ProfileNavProps> = ({ onSetNav }) => {
  const [nav, setNav] = useState('personalInfo');

  useEffect(() => {
    onSetNav && onSetNav(nav);
  }, [nav]);

  return (
    <div className='flex flex-col gap-6 mt-10'>
      <Button
        sx={{
          borderRadius: 'md',
          display: 'flex',
          width: 'full',
          '&:hover': {
            backgroundColor: 'slate.900',
          },
          alignItems: 'center',
          justifyContent: 'start',
          paddingLeft: 2,
        }}
        onClick={() => {
          setNav('myProfile');
        }}>
        <div className='p-2 my-2 rounded-md bg-slate-800'>
          <ImProfile className='text-green-500 text-xl' />
        </div>
        <span className='pl-2 text-xl font-bold'>My Profile</span>
      </Button>
      <Button
        sx={{
          borderRadius: 'md',
          display: 'flex',
          width: 'full',
          '&:hover': {
            backgroundColor: 'slate.900',
          },
          alignItems: 'center',
          justifyContent: 'start',
          paddingLeft: 2,
        }}
        onClick={() => {
          setNav('personalInfo');
        }}>
        <div className='p-2 my-2 rounded-md bg-slate-800'>
          <AiOutlineUser className='text-blue-500 text-xl' />
        </div>
        <span className='pl-2 text-xl font-bold'>Personal Info</span>
      </Button>
      <Button
        sx={{
          borderRadius: 'md',
          display: 'flex',
          width: 'full',
          '&:hover': {
            backgroundColor: 'slate.900',
          },
          alignItems: 'center',
          justifyContent: 'start',
          paddingLeft: 2,
        }}
        onClick={() => {
          setNav('securitySetting');
        }}>
        <div className='p-2 my-2 rounded-md bg-slate-800'>
          <AiOutlineSecurityScan className='text-red-500 text-xl' />
        </div>
        <span className='pl-2 text-xl font-bold'>Security Settings</span>
      </Button>
      <Button
        sx={{
          borderRadius: 'md',
          display: 'flex',
          width: 'full',
          '&:hover': {
            backgroundColor: 'slate.900',
          },
          alignItems: 'center',
          justifyContent: 'start',
          paddingLeft: 2,
        }}
        onClick={() => {
          setNav('payments');
        }}>
        <div className='p-2 my-2 rounded-md bg-slate-800'>
          <AiOutlineDollar className='text-yellow-500 text-xl' />
        </div>
        <span className='pl-2 text-xl font-bold'>Payments</span>
      </Button>
    </div>
  );
};
