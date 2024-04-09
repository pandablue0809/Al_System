import React, { useState } from 'react';

import { ProfileInfo } from './profileCard/profileInfo';
import { ProfileNav } from './profileCard/profileNav';
import MyProfile from './profileCard/nav/myProfile';
import SecuritySetting from './profileCard/nav/securitySetting';
import PersonalInfo from './profileCard/nav/personalInfo';
import Payments from './profileCard/nav/payments';

import 'react-toastify/dist/ReactToastify.css';

const Profile: React.FC = () => {
  const [nav, setNav] = useState('personalInfo');

  return (
    <div className='h-auto lg:min-h-screen flex lg:flex-row flex-col items-start pt-10 px-5 gap-6 '>
      <div className='flex bg-inherit shadow-gray-900 shadow-md lg:w-[30%] w-full h-auto sm:p-5 p-2 md:p-10 xl:p-15 flex-col lg:flex-col md:flex-row sm:flex-row justify-around'>
        <ProfileInfo />
        <ProfileNav onSetNav={setNav} />
      </div>
      <div className='bottom-5 bg-inherit shadow-gray-900 shadow-md lg:w-[60rem] w-full px-20 py-16 h-auto'>
        {nav === 'personalInfo' ? (
          <PersonalInfo />
        ) : nav === 'securitySetting' ? (
          <SecuritySetting />
        ) : nav === 'myProfile' ? (
          <MyProfile />
        ) : (
          <Payments />
        )}
      </div>
    </div>
  );
};

export default Profile;
