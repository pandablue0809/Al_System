import React, { useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import SideBar from '../../components/layout/MySidebar';
import ChatInput from '../../components/input/ChatInput';
import { ChatMessage } from '../../components/messagebox/MessageBox';
import MessageBox from '../../components/messagebox/MessageBox';

const UserDashboard: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  const handleSendMessage = (newMessage: string) => {
    setMessages([...messages, { user: 'Me', message: newMessage }]);
  };

  return (
    <div className='h-screen'>
      <Header />
      <SideBar />
      <div className='justify-center w-full flex overflow-hidden '>
        <div className='mt-5  text-black overflow-scroll h-[75vh]'>
          <MessageBox messages={messages} />
        </div>
        <ChatInput onSendMsg={handleSendMessage} />
      </div>
    </div>
  );
};

export default UserDashboard;
