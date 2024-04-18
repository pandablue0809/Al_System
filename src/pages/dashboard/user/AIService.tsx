import React from 'react';
import { AIServiceSideBar } from '../../../components/layout/aiserviceSidebar/AIServiceSidebar';

const AIService: React.FC = () => {
  return (
    <div className='flex rounded-[20px] border border-solid border-[#dedede] drop-shadow-[50px_50px_100px_10px_rgba(0,0,0,0.1)] text-[#d5d6d7] bg-[#30353c] min-w-[600px] min-h-[480px] max-w-[1300px] overflow-hidden w-[90vw] h-[90vh] p-4'>
      <AIServiceSideBar />
    </div>
  );
};

export default AIService;
