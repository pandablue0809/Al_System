import React from 'react';
import { Outlet } from 'react-router-dom';

import UserSidebar from '../userSidebar/UserSidebar';

const MainLayout: React.FC = () => {
  return (
    <div className='h-screen w-full flex box-border'>
      <UserSidebar />
      <div className='box-border ml-2 md:mx-16'>
        <div className='flex max-h-screen h-[calc(100vh-2.5rem)] w-full overflow-y-auto px-4 py-3 md:px-9 md:py-5'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
