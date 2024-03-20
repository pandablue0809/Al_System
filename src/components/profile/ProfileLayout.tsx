import React, { useEffect, useState } from 'react';
import { ProfileInfo } from './profileCard/profileInfo/ProfileInfo';
import { ProfileNav } from './profileCard/profileNav/ProfileNav';

import 'react-toastify/dist/ReactToastify.css';
import PersonalInfo from './profileCard/nav/personalInfo/PersonalInfo';
import SecuritySetting from './profileCard/nav/securitySetting/SecuritySetting';
import Payments from './profileCard/nav/payments/Payments';
import Services from './profileCard/nav/service/Services';

const ProfileLayout: React.FC = () => {
  const [nav, setNav] = useState('personalInfo');
  useEffect(() => {
    console.log(nav);
  }, [nav]);

  return (
    <div className='h-auto min-h-[90%] flex xl:flex-row flex-col items-start pt-10 px-5 gap-2'>
      <div className='flex bg-[#2b2c40f2] shadow-gray-900 shadow-md xl:w-[30%] w-full h-auto sm:p-5 p-2 md:p-4 lg:p-10 xl:p-6 flex-col xl:flex-col lg:flex-row md:flex-row sm:flex-row justify-around'>
        <ProfileInfo />
        <ProfileNav onSetNav={setNav} />
      </div>
      <div className='bottom-5 bg-[#2b2c40f2] shadow-gray-900 shadow-md xl:w-[67%] w-full p-10 h-auto'>
        {nav === 'personalInfo' ? <PersonalInfo /> : nav === 'securitySetting' ? <SecuritySetting /> : nav === 'payments' ? <Payments /> : <Services />}
      </div>
    </div>
  );
};

export default ProfileLayout;
