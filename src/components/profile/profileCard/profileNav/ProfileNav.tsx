import React, { useState, useEffect } from 'react';
// import { UserOutlined, SecurityScanOutlined, DollarOutlined } from '@ant-design/icons';
import DollarOutlined from '@mui/icons-material/MonetizationOnOutlined';
import SecurityScanOutlined from '@mui/icons-material/PrivacyTipOutlined';
import { AiOutlineUser } from "react-icons/ai";
import { TbServerCog } from "react-icons/tb";

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
      <button
        className='rounded-md flex w-full hover:bg-slate-900 items-center justify-start pl-2'
        onClick={() => {
          setNav('personalInfo');
        }}>
        <div className='p-2 my-2 rounded-md bg-slate-800'>
          <AiOutlineUser className='text-primary-500 text-lg' />
        </div>
        <span className='pl-2 text-xl font-bold'>Personal Info</span>
      </button>
      <button
        className='rounded-md flex w-full hover:bg-slate-900 items-center justify-start pl-2'
        onClick={() => {
          setNav('securitySetting');
        }}>
        <div className='p-2 my-2 rounded-md bg-slate-800'>
          <SecurityScanOutlined className='text-danger-500 text-lg' />
        </div>
        <span className='pl-2 text-xl font-bold'>Security Settings</span>
      </button>
      <button
        className='rounded-md flex w-full hover:bg-slate-900 items-center justify-start pl-2'
        onClick={() => {
          setNav('services');
        }}>
        <div className='p-2 my-2 rounded-md bg-slate-800'>
          <TbServerCog className='text-secondary-500 text-lg' />
        </div>
        <span className='pl-2 text-xl font-bold'>Services</span>
      </button>

      <button
        className='rounded-md flex w-full hover:bg-slate-900 items-center justify-start pl-2'
        onClick={() => {
          setNav('payments');
        }}>
        <div className='p-2 my-2 rounded-md bg-slate-800 '>
          <DollarOutlined className='text-yellow-500 text-lg' />
        </div>
        <span className='pl-2 text-xl font-bold'>Payments</span>
      </button>
    </div>
  );
};
