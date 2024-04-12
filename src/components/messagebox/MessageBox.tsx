import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
type ChatMessage = {
  user: string;
  message: string;
};

export type MessageBoxProps = {
  messages: ChatMessage[];
};

const MessageBox: React.FC<MessageBoxProps> = ({ messages }) => {
  return (
    <div>
      {messages.map((msg, index) => (
        <div key={index} className='flex flex-row items-center'>
          <FaUserCircle className='flex h-7 w-7 text-white' />
          <div key={index} className='ml-2 rounded-xl bg-slate-300 p-4 w-[50vw] mt-2 flex-row'>
            <pre>{msg.message}</pre>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessageBox;
