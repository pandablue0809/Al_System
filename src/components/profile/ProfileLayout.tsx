import React, { useEffect, useState } from 'react';
import { ProfileInfo } from './profileCard/profileInfo/ProfileInfo';
import { ProfileNav } from './profileCard/profileNav/ProfileNav';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PersonalInfo from './profileCard/nav/personalInfo/PersonalInfo';
import SecuritySetting from './profileCard/nav/securitySetting/SecuritySetting';
import Payments from './profileCard/nav/payments/Payments';

const ProfileLayout: React.FC = () => {
  const [nav, setNav] = useState('personalInfo');
  useEffect(() => {
    console.log(nav);
  }, [nav]);

  return (
    <div className='h-auto min-h-screen flex lg:flex-row flex-col items-start pt-10 px-5 '>
      <div className='flex bg-inherit shadow-gray-900 shadow-md lg:w-[30%] w-full h-auto sm:p-5 p-2 md:p-10 xl:p-20 flex-col lg:flex-col md:flex-row sm:flex-row justify-around'>
        <ProfileInfo />
        <ProfileNav onSetNav={setNav} />
      </div>
      <div className='bottom-5 bg-inherit shadow-gray-900 shadow-md ml-6 lg:w-[67%] w-full p-20 h-auto'>
        {nav === 'personalInfo' ? <PersonalInfo /> : nav === 'securitySetting' ? <SecuritySetting /> : <Payments />}
      </div>
    </div>
  );
};

export default ProfileLayout;
