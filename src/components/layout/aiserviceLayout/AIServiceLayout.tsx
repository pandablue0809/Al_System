/**
 * @author Tahara Kazuki
 * @created 04/25/2024
 * @lastModified 04/29/2024
 * @description Types list in Config Store
 * @copyright SoTru
 */
import React from 'react';
import { Outlet } from 'react-router-dom';
import { AIServiceSideBar } from '../aiserviceSidebar/AIServiceSidebar';
import Workspace from '../../../pages/dashboard/user/component/Workspace';

const AIServiceLayout: React.FC = () => {
  return (
    <div className='flex rounded-[20px] border border-solid border-[#dedede] drop-shadow-[50px_50px_100px_10px_rgba(0,0,0,0.1)] text-[#d5d6d7] bg-[#30353c] min-w-[600px] min-h-[480px] max-w-[1300px] overflow-hidden w-[90vw] h-[90vh] p-4'>
      <AIServiceSideBar />
      <div className=' w-[calc(100%-var(--sidebar-width))] h-full flex flex-col'>
        {/* <Outlet /> */}
        <Workspace />
      </div>
    </div>
  );
};

export default AIServiceLayout;
