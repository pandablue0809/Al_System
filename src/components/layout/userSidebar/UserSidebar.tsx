import React, { useState, ReactElement, SVGProps } from 'react';
import { Link } from 'react-router-dom';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Box, IconButton, Typography } from '@mui/material';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AutoFixHighOutlinedIcon from '@mui/icons-material/AutoFixHighOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';

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
        position: '-webkit-sticky',
        display: 'flex',
        height: '100vh',
        top: 0,
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
            <Item className='menu-item' title='Work' to='/dashboard/user/work' icon={<AutoFixHighOutlinedIcon />} selected={selected} setSelected={setSelected} />
            <Item className='menu-item' title='Dashboard' to='/dashboard/user/chat' icon={<HomeOutlinedIcon />} selected={selected} setSelected={setSelected} />

            <Typography fontSize={14} color='#a3a3a3' sx={{ m: '15px 20px 5px 20px' }}>
              Data
            </Typography>
            <Item title='Manage Team' to='' icon={<PeopleOutlinedIcon />} selected={selected} setSelected={setSelected} />
            <Item title='Contacts Information' to='' icon={<ContactsOutlinedIcon />} selected={selected} setSelected={setSelected} />
            <Item title='Invoices Balances' to='' icon={<ReceiptOutlinedIcon />} selected={selected} setSelected={setSelected} />

            <Typography fontSize={14} color='#a3a3a3' sx={{ m: '15px 20px 5px 20px' }}>
              Pages
            </Typography>
            <Item title='Profile Form' to='' icon={<PersonOutlinedIcon />} selected={selected} setSelected={setSelected} />
            <Item title='Calendar' to='' icon={<CalendarTodayOutlinedIcon />} selected={selected} setSelected={setSelected} />
            <Item title='FAQ Page' to='' icon={<HelpOutlineOutlinedIcon />} selected={selected} setSelected={setSelected} />

            <Typography fontSize={14} color='#a3a3a3' sx={{ m: '15px 20px 5px 20px' }}>
              Charts
            </Typography>
            <Item title='Bar Chart' to='' icon={<BarChartOutlinedIcon />} selected={selected} setSelected={setSelected} />
            <Item title='Pie Chart' to='' icon={<PieChartOutlineOutlinedIcon />} selected={selected} setSelected={setSelected} />
            <Item title='Line Chart' to='' icon={<TimelineOutlinedIcon />} selected={selected} setSelected={setSelected} />
            <Item title='Geography Chart' to='' icon={<MapOutlinedIcon />} selected={selected} setSelected={setSelected} />
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default UserSidebar;
