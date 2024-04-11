import React from 'react';
import ChatInput from '../../../components/common/input/ChatInput';

const WorkRoom: React.FC = () => {
  return (
    <div className='w-full relative mx-auto py-1 md:px-2 rounded-lg h-full box-border'>
      <div className='relative mx-auto px-5 flex items-center justify-between bg-foreground rounded-lg md:rounded-xl shadow-md mt-4 h-[95%]'>
        <ChatInput />
      </div>
    </div>
  );
};

export default WorkRoom;
