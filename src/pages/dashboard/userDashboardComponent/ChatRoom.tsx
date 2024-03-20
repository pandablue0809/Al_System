import React, { useState, useRef, useEffect } from 'react';
import { Box, List, ListItem, ListItemAvatar } from '@mui/material';
import { Button } from '@nextui-org/react';
import { Badge, Avatar, Input, user } from '@nextui-org/react';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { LuPhoneCall } from 'react-icons/lu';
import { MdOutlineVideoCameraFront } from 'react-icons/md';
import { RiSearch2Line } from 'react-icons/ri';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import ChatInput from '../../../components/input/ChatInput';

export type User = {
  username: string;
  active: boolean;
  avatar: string;
};

export type Message = {
  text: string;
  sender: string;
};

export type ColorType = 'success' | 'danger' | 'secondary' | 'primary' | 'default' | 'warning';

const ChatRoom: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [searchValue, setSearchValue] = useState<string>('');
  const [newU, setNew] = useState<string>('Iwamoto');
  const handleSendMessage = (newMessage: string) => {
    if (newMessage) {
      const newMessageObj: Message = {
        text: newMessage,
        sender: 'Me',
      };
      setMessages([...messages, newMessageObj]);
    }
  };

  const handleAddUser = () => {
    if (newU) {
      const newUser: User = {
        username: newU,
        active: true,
        avatar: '',
      };
      setUsers([...users, newUser]);
      setNew('');
    }
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const filteredUsers = users.filter((user) => user.username.toLowerCase().includes(searchValue.toLowerCase()));
  const characterToColor = (character: string): ColorType => {
    const colorMap: { [key: string]: ColorType } = {
      A: 'success',
      B: 'danger',
      C: 'success',
      D: 'secondary',
      E: 'danger',
      F: 'primary',
      G: 'danger',
      H: 'primary',
      I: 'secondary',
      J: 'default',
      K: 'warning',
      L: 'danger',
      M: 'success',
      N: 'primary',
      O: 'secondary',
      P: 'success',
      Q: 'warning',
      R: 'warning',
      S: 'success',
      T: 'primary',
      U: 'secondary',
      V: 'success',
      W: 'primary',
      X: 'danger',
      Y: 'default',
      Z: 'secondary',
    };

    const upperCaseChar = character.toUpperCase();

    if (upperCaseChar in colorMap) {
      return colorMap[upperCaseChar];
    }

    return 'default';
  };

  const messageEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='w-full relative mx-auto py-1 md:px-2 rounded-lg h-full box-border'>
      <div className='flex flex-row bg-foreground h-full shadow-lg rounded-lg '>
        <div className='flex-none h-full border-r border-gray-500'>
          <Box
            sx={{
              borderBottom: '1px solid #444',
              padding: '10px',
              display: 'flex',
              justifyContent: 'space-around',
            }}>
            <div>
              <Badge content='' color='success' shape='circle' placement='bottom-right'>
                <Avatar
                  showFallback
                  name={'Iwamoto'.charAt(0)}
                  className='text-2xl bg-primary'
                  src={'https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/avatars/1.png'}
                />
              </Badge>
            </div>
            <Input
              isClearable
              className='px-3'
              radius='lg'
              size='sm'
              variant='bordered'
              value={searchValue}
              onChange={handleSearchChange}
              placeholder='Type to search...'
              startContent={<RiSearch2Line />}
            />
          </Box>
          <div className='h-[80%] mb-3 p-2 overflow-y-scroll'>
            <List sx={{ width: 200 }}>
              <h1 className='p-3 text-xl'>Chats</h1>
              {filteredUsers.map((user, index) => (
                <ListItem key={index}>
                  <ListItemAvatar>
                    <Badge content='' color={`${!user.active ? 'success' : 'default'}`} shape='circle' placement='bottom-right'>
                      <Avatar
                        showFallback
                        name={user?.username.charAt(0).toUpperCase()}
                        src={user?.avatar}
                        className={`text-2xl`}
                        color={`${characterToColor(user?.username.charAt(0).toUpperCase())}`}
                      />
                    </Badge>
                  </ListItemAvatar>
                  <span>{user?.username}</span>
                </ListItem>
              ))}
            </List>
          </div>
          <div className='flex flex-row justify-around p-2 items-center'>
            <Input
              className='px-3'
              radius='lg'
              variant='bordered'
              size='sm'
              value={newU}
              onChange={(e) => setNew(e.target.value)}
              placeholder='Type to add new user...'
            />
            <Button onClick={handleAddUser} color='primary'>
              <AiOutlineUserAdd className='text-xl' />
            </Button>
          </div>
        </div>
        <div className='h-100 grow'>
          <Box
            sx={{
              height: '70px',
              padding: '10px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingLeft: '20px',
              paddingRight: '30px',
              borderBottom: '1px solid #444',
            }}>
            <div className='flex items-center'>
              <Badge content='' color='success' shape='circle' placement='bottom-right'>
                <Avatar
                  showFallback
                  name={'Iwamoto'.charAt(0)}
                  className='text-2xl bg-primary'
                  src={'https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/avatars/1.png'}
                />
              </Badge>
              <span className='ml-2'>{user?.name}</span>
            </div>
            <div className='flex flex-row gap-2'>
              <button color='white' className='text-xl p-2 rounded-full hover:bg-[#333]'>
                <LuPhoneCall />
              </button>
              <button color='white' className='text-xl p-2 rounded-full hover:bg-[#333]'>
                <MdOutlineVideoCameraFront className='flex' />
              </button>
              <button color='white' className='text-xl p-2 rounded-full hover:bg-[#333]'>
                <RiSearch2Line />
              </button>
              <button color='white' className='text-xl p-2 rounded-full hover:bg-[#333]'>
                <HiOutlineDotsVertical />
              </button>
            </div>
          </Box>
          <div className='overflow-auto overflow-y b-2 ml-2 mr-1 bg-inherit h-[65vh] border-none p-4'>
            {messages.map((message, index) => (
              <Box key={index} display='flex' alignItems='start' marginBottom={1}>
                <Avatar name='L' className='text-2xl' color={characterToColor('Iwamoto'.charAt(0).toUpperCase())}>
                  {message.sender.charAt(0)}
                </Avatar>
                <div className='ml-2 bg-[#444] px-2 rounded-md text-white py-2 max-w-[40vw] shadow-lg flex-row' ref={messageEndRef}>
                  <p className=' break-words whitespace-pre-wrap'>{message.text}</p>
                </div>
              </Box>
            ))}
            <ChatInput onSendMsg={handleSendMessage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;
