import React, { useState, useRef, useEffect } from 'react';
import { TextField, Box, Paper, List, ListItem, ListItemAvatar, Typography } from '@mui/material';
import { Button } from "@nextui-org/react";
import { Badge, Avatar, Input, user } from '@nextui-org/react';
import { redirect } from 'react-router-dom';
import { AiOutlineUserAdd } from "react-icons/ai";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineVideoCameraFront } from "react-icons/md";
import { RiSearch2Line } from "react-icons/ri";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { CiMicrophoneOn } from "react-icons/ci";
import SendIcon from '@mui/icons-material/Send';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import ChatInput from '../../../components/input/ChatInput';
import { inherits } from 'util';
import GridViewIcon from '@mui/icons-material/GridView';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';


export type User = {
    username: string;
    active: boolean;
    avatar: string;
}

export type Message = {
    text: string;
    sender: string;
}



interface ChatRoomProps { }

const ChatRoom: React.FC<ChatRoomProps> = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [newMessage, setNewMessage] = useState<string>('');
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
            setNewMessage('');
        }
    };

    const handleAddUser = () => {
        if (newU) {
            const newUser: User = {
                username: newU,
                active: true,
                avatar: ''
            };
            setUsers([...users, newUser]);
            setNew('');
        }
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    };

    const filteredUsers = users.filter((user) => user.username.toLowerCase().includes(searchValue.toLowerCase()));
    const characterToColor = (character: string) : string => {
        const colorMap: { [key: string]: string } = {
            'A': 'success',
            'B': 'danger',
            'C': 'success',
            'D': 'secondary',
            'E': 'danger',
            'F': 'primary',
            'G': 'danger',
            'H': 'primary',
            'I': 'secondary',
            'J': 'default',
            'K': 'warning',
            'L': 'danger',
            'M': 'success',
            'N': 'primary',
            'O': 'secondary',
            'P': 'success',
            'Q': 'warning',
            'R': 'warning',
            'S': 'success',
            'T': 'primary',
            'U': 'secondary',
            'V': 'success',
            'W': 'primary',
            'X': 'danger',
            'Y': 'default',
            'Z': 'secondary',
        };

        const upperCaseChar = character.toUpperCase();

        if (upperCaseChar in colorMap) {
            return colorMap[upperCaseChar];
        }

        return 'default';
    }

    const chatContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        focusOnLastMessage();
    }, [newMessage]);

    const focusOnLastMessage = () => {
        if (chatContainerRef.current) {

            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    };

    return (
        <div className='h-screen bg-[#232333] py-5 px-10 w-full flex flex-col'>
            <div className='bg-[#2b2c40f2] h-16 mb-5 shadow-lg rounded-lg flex-row flex items-center px-6 justify-between '>
                <div className='flex flex-row items-center gap-4'>
                    <RiSearch2Line className='text-2xl' />
                    <span className='text-xl text-[#DBDBEB]'>Search(Ctrl+/)</span>
                </div>

                <div className='flex flex-row gap-2 items-center'>

                    <button color="white" className="flex text-xl p-2 rounded-full hover:bg-[#333]" >
                        <TranslateOutlinedIcon />
                    </button>
                    <button color="white" className="flex text-xl p-2 rounded-full hover:bg-[#333]" >
                        <WbSunnyOutlinedIcon />
                    </button>
                    <button color="white" className="flex text-xl p-2 rounded-full hover:bg-[#333]" >
                        <GridViewIcon />
                    </button>
                    <button color="white" className="flex text-xl p-2 rounded-full hover:bg-[#333]" >
                        <Badge content='' color='danger' shape='circle' placement='top-right'>
                            <NotificationsOutlinedIcon />
                        </Badge>
                    </button>
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
                </div>
            </div>
            <div className='flex flex-row bg-[#2b2c40f2] flex h-full shadow-lg rounded-lg '>
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
                                            <Avatar showFallback name={user?.username.charAt(0).toUpperCase()} src={user?.avatar} className={`text-2xl`} color={characterToColor(user?.username.charAt(0).toUpperCase())} />
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
                        <Button onClick={handleAddUser} color="primary">
                            <AiOutlineUserAdd className='text-xl' />
                        </Button>
                    </div>
                </div>
                <div className='h-100 grow'>
                    <Box
                        sx={{
                            height: "70px",
                            padding: '10px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingLeft: '20px',
                            paddingRight: '30px',
                            borderBottom: '1px solid #444'
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
                            <button color="white" className="text-xl p-2 rounded-full hover:bg-[#333]">
                                <LuPhoneCall />
                            </button>
                            <button color="white" className="text-xl p-2 rounded-full hover:bg-[#333]">
                                <MdOutlineVideoCameraFront className='flex' />
                            </button>
                            <button color="white" className="text-xl p-2 rounded-full hover:bg-[#333]">
                                <RiSearch2Line />
                            </button>
                            <button color="white" className="text-xl p-2 rounded-full hover:bg-[#333]" >
                                <HiOutlineDotsVertical />
                            </button>
                        </div>
                    </Box>
                    <Paper variant='outlined' sx={{ overflow: 'auto', overflowY: true, Bottom: 2, padding: 2, marginleft: 2, marginRight: 1, backgroundColor: 'inherit', border: 'none', height: '70vh' }}>
                        {messages.map((message, index) => (
                            <Box key={index} display='flex' alignItems='center' marginBottom={1}>
                                <Avatar name="L" className='text-2xl' color={characterToColor('Iwamoto'.charAt(0).toUpperCase())}>{message.sender.charAt(0)}</Avatar>
                                <div className='ml-2 bg-[#444] px-2 rounded-md text-white py-2 max-w-96 shadow-lg'>

                                    <Typography variant='body2'> <pre>{message.text}</pre></Typography>
                                </div>
                            </Box>
                        ))}
                        <ChatInput onSendMsg={handleSendMessage} />
                    </Paper>
                </div>
            </div>
        </div>
    );
};

export default ChatRoom;
