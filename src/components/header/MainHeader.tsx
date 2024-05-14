import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Box,
  Tooltip,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  MenuList,
  Divider,
  ListItemIcon,
  Typography,
  ListItemText,
  Stack,
  Grid,
  Button,
  Modal,
  Badge,
} from '@mui/material';
import { styled } from '@mui/material/styles';

import { useAppDispatch, useAppSelector } from '../../hooks/useReduxHooks';
import { readUser } from '../../services/localStorage.service';
import { setUser } from '../../store/slices/userSlice';
import Profile from '../profile';

import LOGO from '../../assets/images/logo/logo.svg';
import { GoMail } from 'react-icons/go';
import { GoBell } from 'react-icons/go';
import { TbGridDots } from 'react-icons/tb';
import { BiUser } from 'react-icons/bi';
import { IoSettingsOutline } from 'react-icons/io5';
import { GoSignOut } from 'react-icons/go';
import { TbInbox } from 'react-icons/tb';
import { IoChatbubblesOutline } from 'react-icons/io5';
import { BiDollar } from 'react-icons/bi';
import { SlQuestion } from 'react-icons/sl';
import { HiOutlineCalendar } from 'react-icons/hi2';
import { HiOutlinePlay } from 'react-icons/hi';
import { VscNotebook } from 'react-icons/vsc';
import { HiOutlineVideoCamera } from 'react-icons/hi';
import { GiAlarmClock } from 'react-icons/gi';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { GoPeople } from 'react-icons/go';
import { LiaChalkboardSolid } from 'react-icons/lia';
import { LiaAppStore } from 'react-icons/lia';
import { LiaEdit } from 'react-icons/lia';
import { RiAddCircleLine } from 'react-icons/ri';
import { BiSolidEdit } from 'react-icons/bi';
import { SlClose } from 'react-icons/sl';
import { BsFillCheckCircleFill } from 'react-icons/bs';

const StyledBadge = styled(Badge)(() => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#71DD37',
    color: '#44b700',
    boxShadow: `0 0 0 2px #3c414a`,
  },
}));

export const MainHeader: React.FC = () => {
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [anchorAccount, setAnchorAccont] = useState<null | HTMLElement>(null);
  const openTuen = Boolean(anchorEl);
  const openAccount = Boolean(anchorAccount);

  useEffect(() => {
    const username = readUser()?.username;
    if (username) {
      loadUser(username);
    }
  }, []);

  const handleAvatarClick = () => {
    setIsModalOpen(true);
  };

  const handleEditButtonClick = () => {
    setIsEditModalOpen(true);
  };

  const loadUser = async (user: string) => {
    await dispatch(setUser(user));
  };

  const handleClickTuen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClickAccount = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorAccont(event.currentTarget);
  };

  const handleCloseTuen = () => {
    setAnchorEl(null);
  };

  const handleCloseAccount = () => {
    setAnchorAccont(null);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleEditModalClose = () => {
    setIsEditModalOpen(false);
  };

  const logoutHandler = () => {
    handleCloseAccount();
    navigate('/logout');
  };

  const settingHandler = () => {
    handleCloseAccount();
    navigate('/dashboard/user/profile');
  };

  return (
    <nav className='fixed top-0 z-50 bottom-auto left-0 right-0 bg-[#3c414a]'>
      <div className='container mx-auto'>
        <div className='z-10 items-center justify-between h-10 flex pl-4 md:pl-10 pr-4 md:pr-10 relative box-border'>
          <div className='p-2 inline-flex text-center items-center justify-center max-w-full'>
            <img className='w-6' src={LOGO} />
          </div>
          {/* search Button */}
          <Button sx={{ color: 'white', fontSize: '12px', textTransform: 'none', width: '300px', padding: '3px', bgcolor: '#ffffff1a' }}>
            <svg className='w-4 h-4' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'>
              <path stroke='currentColor' d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z' />
            </svg>
            <span className='ml-2 text-[14px]'>Search...</span>
          </Button>
          {/* end */}
          <div className='inline-flex items-center text-center gap-x-[5px]'>
            <Button
              sx={{ color: 'white', fontSize: '12px', textTransform: 'none' }}
              startIcon={<RiAddCircleLine style={{ width: 16, height: 16 }} />}>
              New
            </Button>
            <Divider orientation='vertical' flexItem />
            {/* Bell notification */}
            <button className='relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-transparent outline-none'>
              <GoBell style={{ width: 16, height: 16 }} />
              <div className='absolute inline-flex items-center justify-center w-4 h-4 text-[9px] font-bold text-white bg-red-500 border-transparent rounded-full top-[2px] end-[2px]'>
                20
              </div>
            </button>
            {/* mail notification */}
            <button className='relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-transparent outline-none'>
              <GoMail style={{ width: 16, height: 16 }} />
              <div className='absolute inline-flex items-center justify-center w-4 h-4 text-[9px] font-bold text-white bg-red-500 border-transparent rounded-full top-[2px] end-[2px]'>
                20
              </div>
            </button>
            {/* grid toolkit menu */}
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
              <Tooltip title='tune panel'>
                <IconButton onClick={handleClickTuen} size='small'>
                  <TbGridDots style={{ width: 16, height: 16 }} />
                </IconButton>
              </Tooltip>
            </Box>
            <Menu
              anchorEl={anchorEl}
              id='tuen-menu'
              open={openTuen}
              onClose={handleCloseTuen}
              onClick={handleCloseTuen}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              sx={{ top: 10 }}>
              <Box sx={{ paddingTop: 2, paddingLeft: 2, paddingRight: 2, width: 260 }}>
                <Grid container item rowSpacing={1} columnSpacing={1}>
                  <Grid item md={4}>
                    <MenuItem onClick={handleCloseTuen}>
                      <div className='text-center'>
                        <div className='p-[16px] border-[1px] border-gray-500 rounded-xl' onClick={handleCloseTuen}>
                          <Avatar src='/broken-image.jpg' />
                        </div>
                        <div className='text-[10px] mt-[8px]'>My Profile</div>
                      </div>
                    </MenuItem>
                  </Grid>
                  <Grid item md={4}>
                    <MenuItem onClick={handleCloseTuen}>
                      <div className='text-center'>
                        <div className='p-[16px] border-[1px] border-gray-500 rounded-xl'>
                          <BsFillCheckCircleFill style={{ width: 20, height: 20, color: '#9992f4' }} />
                        </div>
                        <div className='text-[10px] mt-[8px]'>My Tasks</div>
                      </div>
                    </MenuItem>
                  </Grid>
                  <Grid item md={4}>
                    <MenuItem onClick={handleCloseTuen}>
                      <div className='text-center'>
                        <div className='p-[16px] border-[1px] border-gray-500 rounded-xl'>
                          <HiOutlineCalendar style={{ width: 20, height: 20, color: '#14868a' }} />
                        </div>
                        <div className='text-[10px] mt-[8px]'>Calendar</div>
                      </div>
                    </MenuItem>
                  </Grid>
                  <Grid item md={4}>
                    <MenuItem onClick={handleCloseTuen}>
                      <div className='text-center'>
                        <div className='p-[16px] border-[1px] border-gray-500 rounded-xl'>
                          <HiOutlinePlay style={{ width: 20, height: 20, color: '#5cb388' }} />
                        </div>
                        <div className='text-[10px] mt-[8px]'>Track Time</div>
                      </div>
                    </MenuItem>
                  </Grid>
                  <Grid item md={4}>
                    <MenuItem onClick={handleCloseTuen}>
                      <div className='text-center'>
                        <div className='p-[16px] border-[1px] border-gray-500 rounded-xl'>
                          <VscNotebook style={{ width: 20, height: 20, color: '#fbcb5c' }} />
                        </div>
                        <div className='text-[10px] mt-[8px]'>Notepad</div>
                      </div>
                    </MenuItem>
                  </Grid>
                  <Grid item md={4}>
                    <MenuItem onClick={handleCloseTuen}>
                      <div className='text-center'>
                        <div className='p-[16px] border-[1px] border-gray-500 rounded-xl'>
                          <HiOutlineVideoCamera style={{ width: 20, height: 20, color: '#e38388' }} />
                        </div>
                        <div className='text-[10px] mt-[8px]'>Clips</div>
                      </div>
                    </MenuItem>
                  </Grid>
                  <Grid item md={4}>
                    <MenuItem onClick={handleCloseTuen}>
                      <div className='text-center'>
                        <div className='p-[16px] border-[1px] border-gray-500 rounded-xl'>
                          <GiAlarmClock style={{ width: 20, height: 20 }} />
                        </div>
                        <div className='text-[10px] mt-[8px]'>Reminder</div>
                      </div>
                    </MenuItem>
                  </Grid>
                  <Grid item md={4}>
                    <MenuItem onClick={handleCloseTuen}>
                      <div className='text-center'>
                        <div className='p-[16px] border-[1px] border-gray-500 rounded-xl'>
                          <IoChatbubblesOutline style={{ width: 20, height: 20 }} />
                        </div>
                        <div className='text-[10px] mt-[8px]'>Clips</div>
                      </div>
                    </MenuItem>
                  </Grid>
                  <Grid item md={4}>
                    <MenuItem onClick={handleCloseTuen}>
                      <div className='text-center'>
                        <div className='p-[16px] border-[1px] border-gray-500 rounded-xl'>
                          <HiOutlineDocumentText style={{ width: 20, height: 20 }} />
                        </div>
                        <div className='text-[10px] mt-[8px]'>New Doc</div>
                      </div>
                    </MenuItem>
                  </Grid>
                  <Grid item md={4}>
                    <MenuItem onClick={handleCloseTuen}>
                      <div className='text-center'>
                        <div className='p-[16px] border-[1px] border-gray-500 rounded-xl'>
                          <LiaChalkboardSolid style={{ width: 20, height: 20 }} />
                        </div>
                        <div className='text-[10px] mt-[8px]'>Whiteboard</div>
                      </div>
                    </MenuItem>
                  </Grid>
                  <Grid item md={4}>
                    <MenuItem onClick={handleCloseTuen}>
                      <div className='text-center'>
                        <div className='p-[16px] border-[1px] border-gray-500 rounded-xl'>
                          <GoPeople style={{ width: 20, height: 20 }} />
                        </div>
                        <div className='text-[10px] mt-[8px]'>People</div>
                      </div>
                    </MenuItem>
                  </Grid>
                </Grid>
                <Divider />
                <MenuItem sx={{ pt: '3px !important', pb: '3px !important' }} onClick={handleCloseAccount}>
                  <div className='inline-flex text-center items-center justify-start'>
                    <ListItemIcon>
                      <LiaAppStore style={{ width: 20, height: 20 }} />
                    </ListItemIcon>
                    <div className='text-[12px] font-thin text-[#D5D6D7]'>App Center</div>
                  </div>
                </MenuItem>
                <MenuItem sx={{ pt: '3px !important', pb: '3px !important' }} onClick={handleCloseAccount}>
                  <div className='inline-flex text-center items-center justify-start'>
                    <ListItemIcon>
                      <LiaEdit style={{ width: 20, height: 20 }} />
                    </ListItemIcon>
                    <div className='text-[12px] font-thin text-[#D5D6D7]'>SoTru App</div>
                  </div>
                </MenuItem>
              </Box>
            </Menu>
            {/* account menu */}
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
              <Tooltip title='account panel'>
                <IconButton onClick={handleClickAccount} size='small'>
                  <StyledBadge overlap='circular' color='success' anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} variant='dot'>
                    <Avatar alt={user ?? ''} src='/broken-image.jpg' style={{ width: 20, height: 20, color: 'white', fontSize: 10 }} />
                  </StyledBadge>
                </IconButton>
              </Tooltip>
            </Box>
            <Menu
              anchorEl={anchorAccount}
              id='menu-id'
              open={openAccount}
              onClose={handleCloseAccount}
              onClick={handleCloseAccount}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              sx={{ top: 10 }}>
              <Box sx={{ width: 220, maxWidth: '100%', boxSizing: 'border-box', pl: 1, pr: 1 }}>
                <MenuList sx={{ pb: '0px !important' }}>
                  <Box sx={{ display: 'inline-flex', alignItems: 'center' }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <Stack>
                      <StyledBadge overlap='circular' color='success' anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} variant='dot'>
                        <Avatar
                          alt={user ?? ''}
                          src='/broken-image.jpg'
                          style={{ width: 32, height: 32, color: 'white', fontSize: 10, marginLeft: 13 }}
                          onClick={handleAvatarClick}
                        />
                      </StyledBadge>
                    </Stack>
                    <ListItemText
                      primary={
                        <Typography variant='body1' sx={{ fontSize: '14px' }}>
                          {user}
                        </Typography>
                      }
                      secondary={
                        <Typography variant='body1' sx={{ fontSize: '12px', color: '#87909e', transition: '2.8s ease' }} className='cursor-pointer'>
                          {`${isHovered ? 'devlegend' : 'admin'}`}
                        </Typography>
                      }
                      sx={{ ml: 2, fontSize: '14px' }}
                    />
                  </Box>

                  <div className='flex flex-col border-t border-b my-2 py-2 border-[#444242] px-3'>
                    <span className='text-green-400 text-sm'>About Me</span>
                    <p className='text-[11px] mb-2 ml-2'>
                      As accomplished frontend developer, I&apos;ve enough experience with not only React.js but also Webflow and WordPress.
                    </p>
                    <span className='text-green-400 text-sm'>Sotru member since</span>
                    <p className='text-[11px] ml-2'>Dec 4, 2024</p>
                  </div>
                  <MenuItem sx={{ display: 'block', pt: '5px !important', pb: '3px !important' }} onClick={settingHandler}>
                    <ListItemIcon>
                      <BiUser style={{ width: 15, height: 15, color: '#87909e' }} />
                    </ListItemIcon>
                    <span className='text-[13px] text-[#D5D6D7]'>Profile</span>
                  </MenuItem>
                  <MenuItem sx={{ pt: '5px !important', pb: '3px !important' }} onClick={handleCloseAccount}>
                    <ListItemIcon>
                      <TbInbox style={{ width: 15, height: 15, color: '#87909e' }} />
                    </ListItemIcon>
                    <span className='text-[13px] font-thin text-[#D5D6D7]'>Inbox</span>
                  </MenuItem>
                  <MenuItem sx={{ pt: '5px !important', pb: '3px !important' }} onClick={handleCloseAccount}>
                    <ListItemIcon>
                      <IoChatbubblesOutline style={{ width: 15, height: 15, color: '#87909e' }} />
                    </ListItemIcon>
                    <span className='text-[13px] font-thin text-[#D5D6D7]'>Chat</span>
                  </MenuItem>
                  <Divider />
                  <MenuItem sx={{ pt: '5px !important', pb: '3px !important' }} onClick={handleCloseAccount}>
                    <ListItemIcon>
                      <IoSettingsOutline style={{ width: 15, height: 15, color: '#87909e' }} />
                    </ListItemIcon>
                    <span className='text-[13px] font-thin text-[#D5D6D7]'>Setting</span>
                  </MenuItem>
                  <MenuItem sx={{ pt: '5px !important', pb: '3px !important' }} onClick={handleCloseAccount}>
                    <ListItemIcon>
                      <BiDollar style={{ width: 15, height: 15, color: '#87909e' }} />
                    </ListItemIcon>
                    <span className='text-[13px] font-thin text-[#D5D6D7]'>Premium</span>
                  </MenuItem>
                  <MenuItem sx={{ pt: '5px !important', pb: '3px !important' }} onClick={handleCloseAccount}>
                    <ListItemIcon>
                      <SlQuestion style={{ width: 15, height: 15, color: '#87909e' }} />
                    </ListItemIcon>
                    <span className='text-[13px] font-thin text-[#D5D6D7]'>FAQ</span>
                  </MenuItem>
                  <Divider />
                  <MenuItem sx={{ pt: '5px !important', pb: '3px !important' }} onClick={logoutHandler}>
                    <ListItemIcon>
                      <GoSignOut style={{ width: 15, height: 15, color: '#87909e' }} />
                    </ListItemIcon>
                    <span className='text-[13px] text-[#D5D6D7]'>Log out</span>
                  </MenuItem>
                </MenuList>
              </Box>
            </Menu>
          </div>
        </div>
      </div>
      <Modal
        open={isModalOpen}
        onClose={handleModalClose}
        sx={{
          display: 'flex',
          p: 5,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        aria-labelledby='parent-modal-title'
        aria-describedby='parent-modal-description'>
        <div className='flex w-[30rem] h-[28rem] border border-gray-700 rounded-lg outline-none items-center bg-[#333] flex-col'>
          <header className='bg-[#2e2b40] rounded-t-lg h-16 w-full p-6 mb-14'>
            <div className='flex flex-row justify-between'>
              <StyledBadge overlap='circular' color='success' anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} variant='dot'>
                <Avatar alt={user ?? ''} src='/broken-image.jpg' style={{ width: 70, height: 70, color: 'white', fontSize: 10 }} />
              </StyledBadge>
              <div className='mb-3'>
                <IconButton onClick={handleEditButtonClick}>
                  <BiSolidEdit />
                </IconButton>
              </div>
            </div>
          </header>
          <div className='bg-[#111] w-[90%] h-[65%] rounded-xl p-5'>
            <span className='text-md'>Admin</span>
            <p className='text-[12px] text-[#555]'>devlegend_1220</p>
            <div className='flex flex-col border-t border-b my-2 py-2 border-[#444242] px-3'>
              <span className='text-green-400 text-sm'>About Me</span>
              <p className='text-[11px] mb-2 ml-2'>
                As accomplished frontend developer, I&apos;ve enough experience with not only React.js but also Webflow and WordPress.
              </p>
              <span className='text-green-400 text-sm'>Sotru member since</span>
              <p className='text-[11px] ml-2'>Dec 4, 2024</p>
            </div>
            <p className='text-sm'>Note</p>
            <input placeholder='Click to add note' className='w-full bg-transparent border-none outline-none text-sm'></input>
          </div>
        </div>
      </Modal>
      <Modal
        open={isEditModalOpen}
        onClose={handleEditModalClose}
        sx={{
          display: 'flex',
          p: 5,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <div className='absolute top-0  flex w-full lg:h-screen h-scroll border border-gray-700 outline-none items-center bg-[#333] flex-col'>
          <div className='absolute right-2 top-2'>
            <IconButton onClick={handleEditModalClose}>
              <SlClose />
            </IconButton>
          </div>
          <Profile />
        </div>
      </Modal>
    </nav>
  );
};
