import React, { useState, ReactElement, SVGProps } from 'react';
import { Link } from 'react-router-dom';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Box, IconButton, Typography } from '@mui/material';

// import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PermPhoneMsgOutlinedIcon from '@mui/icons-material/PermPhoneMsgOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import ManageSearchOutlinedIcon from '@mui/icons-material/ManageSearchOutlined';
import ApiOutlinedIcon from '@mui/icons-material/ApiOutlined';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined';

import logo from '../../../assets/images/logo/logo.svg';

type ItemData = {
  className?: string;
  title: string;
  to: string;
  icon: ReactElement<SVGProps<SVGSVGElement>>;
  selected: string;
  setSelected: (title: string) => void;
};

const Item: React.FC<ItemData> = ({ className, title, to, icon, selected, setSelected }) => {
  return (
    <MenuItem
      className={className ?? ''}
      active={selected === title}
      style={{ color: '#e0e0e0' }}
      component={<Link to={to} />}
      onClick={() => setSelected(title)}
      icon={icon}>
      <Typography fontSize={13}>{title}</Typography>
    </MenuItem>
  );
};

const UserSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const [selected, setSelected] = useState('Dashboard');

  return (
    <Box
      sx={{
        position: 'sticky',
        display: 'flex',
        height: 'calc(100vh - 2.5rem)',
        bottom: 0,
        zIndex: 10000,
        '& .sidebar': { border: 'none' },
        '& .menu-icon': { backgroundColor: 'transparent !important' },
        '& .menu-item': { backgroundColor: 'transparent !important' },
        '& .menu-anchor': { color: 'inherit !important', backgroundColor: 'transparent !important' },
        '& .menu-item:hover': { backgroundColor: 'transparent !important' },
        '& .menu-item.active': { backgroundColor: 'transparent !important' },
      }}>
      <Sidebar className='sidebar' collapsed={isCollapsed} breakPoint='md' backgroundColor='#2b2c40'>
        <Menu>
          <MenuItem
            className='menu-item'
            icon={isCollapsed ? <MenuOutlinedIcon onClick={() => setIsCollapsed(!isCollapsed)} /> : undefined}
            style={{ margin: '10px 0 20px 0', color: '#e0e0e0' }}>
            {!isCollapsed && (
              <Box display='flex' justifyContent='space-between' alignItems='center' ml='15px'>
                <Typography fontSize={24} color='#e0e0e0'>
                  ADMINIS
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <CloseOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb='25px'>
              <Box display='flex' justifyContent='center' alignItems='center' sx={{ '& .avater-image': { backgroundColor: '#141b2d' } }}>
                <img
                  className='avater-image'
                  alt='profile-user'
                  width='100px'
                  height='100px'
                  src={logo}
                  style={{ cursor: 'pointer', borderRadius: '50%' }}
                />
              </Box>
              <Box textAlign='center'>
                <Typography fontSize={24} color='#e0e0e0' fontWeight='bold' sx={{ m: '10px 0 0 0' }}>
                  SoTru
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : '10%'}>
            <Item
              className='menu-item'
              title='Dashboard'
              to='/dashboard/user'
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography fontSize={14} color='#a3a3a3' sx={{ m: '15px 20px 5px 20px' }}>
              AI Service
            </Typography>
            <Item
              className='menu-item'
              title='Your AI'
              to='/dashboard/user/work'
              icon={<SupportAgentOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item title='Invoices' to='/dashboard/user/invoice' icon={<ReceiptOutlinedIcon />} selected={selected} setSelected={setSelected} />
            <Typography fontSize={14} color='#a3a3a3' sx={{ m: '15px 20px 5px 20px' }}>
              Community Service
            </Typography>
            <Item
              className='menu-item'
              title='Community'
              to='/dashboard/user/chat'
              icon={<PermPhoneMsgOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography fontSize={14} color='#a3a3a3' sx={{ m: '15px 20px 5px 20px' }}>
              List
            </Typography>
            <Item title='Inventory List' to='' icon={<StorageOutlinedIcon />} selected={selected} setSelected={setSelected} />
            <Item title='Team List' to='/dashboard/user/team' icon={<PeopleOutlinedIcon />} selected={selected} setSelected={setSelected} />
            <Item title='Paid List' to='/dashboard/user/paid-history' icon={<ManageSearchOutlinedIcon />} selected={selected} setSelected={setSelected} />

            <Typography fontSize={14} color='#a3a3a3' sx={{ m: '15px 20px 5px 20px' }}>
              My Setting
            </Typography>
            <Item title='My Info' to='/dashboard/user/setting' icon={<ContactsOutlinedIcon />} selected={selected} setSelected={setSelected} />
            <Item title='Schedule' to='' icon={<CalendarTodayOutlinedIcon />} selected={selected} setSelected={setSelected} />

            <Typography fontSize={14} color='#a3a3a3' sx={{ m: '15px 20px 5px 20px' }}>
              Configuration
            </Typography>

            <Item title='My API' to='' icon={<ApiOutlinedIcon />} selected={selected} setSelected={setSelected} />
            <Item title='Add Language Model' to='' icon={<BuildOutlinedIcon />} selected={selected} setSelected={setSelected} />
            <Item title='Preferences' to='' icon={<TuneOutlinedIcon />} selected={selected} setSelected={setSelected} />
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default UserSidebar;
