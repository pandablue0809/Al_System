import React from 'react';
import ChatInput from '../../../components/input/ChatInput';

const WorkRoom: React.FC = () => {
  return (
    <div className='w-full relative mx-auto py-1 md:px-2 rounded-lg md:rounded-xl h-full box-border'>
      <div className='relative mx-auto max-w-[1400px] px-5 md:px-6 lg:px-8 xl:px-10 2xl:px-0 flex items-center justify-between bg-[#2b2c40] rounded-lg md:rounded-xl shadow-md mt-4 h-[95%]'>
        <ChatInput />
      </div>
    </div>
  );
};

export default WorkRoom;
