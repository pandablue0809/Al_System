import React, { useState } from 'react';

import { Box, Tooltip, IconButton, Avatar, Menu, MenuItem, MenuList, Divider, ListItemIcon, Grid, Typography, ListItemText } from '@mui/material';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';

import LOGO from '../../assets/images/logo/logo.svg';
import GridIcon from '@mui/icons-material/GridViewOutlined';
import CalendarIcon from '@mui/icons-material/CalendarMonthOutlined';
import AddIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import InvoiceIcon from '@mui/icons-material/DocumentScannerOutlined';
import UserIcon from '@mui/icons-material/AccountCircleOutlined';
import RoleIcon from '@mui/icons-material/VerifiedUserOutlined';
import DashboardIcon from '@mui/icons-material/DashboardOutlined';
import SettingsIcon from '@mui/icons-material/SettingsOutlined';
import NotificationsIcon from '@mui/icons-material/NotificationsNoneOutlined';

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export const MainHeader: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav className='fixed top-0 z-50 bottom-auto left-0 right-0 bg-[#061121]'>
      <div className='container mx-auto'>
        <div className='z-10 items-center justify-between h-16 flex pl-4 md:pl-10 pr-4 md:pr-10 relative box-border'>
          <div className='justify-between flex static'>
            <div className='justify-between w-full flex'>
              <ul className='gap-x-6 my-0 mx-auto px-0 flex list-none'>
                <li>
                  <div className='max-w-md inline-flex items-center'>
                    <div className='relative'>
                      <input
                        className='block w-full p-2 ps-10 text-sm text-white focus:border-gray-500 outline-none border border-gray-600 rounded-full bg-gray-700'
                        placeholder='Search'
                        required
                      />
                      <button className='absolute inset-y-0 end-0 flex items-center pe-3'>
                        <svg
                          className='w-4 h-4 text-white hover:text-[#1199FA]'
                          aria-hidden='true'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 20 20'>
                          <path stroke='currentColor' d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z' />
                        </svg>
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className='p-2 inline-flex text-center items-center justify-center max-w-full'>
            <img className='w-10' src={LOGO} />
            <span className='ml-2 md:ml-4 text-base md:text-xl font-semibold'>SoTru</span>
          </div>
          <div className='inline-flex items-center text-center'>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
              <Tooltip title='tune panel'>
                <IconButton
                  onClick={handleClick}
                  size='small'
                  sx={{ ml: 2 }}
                  aria-controls={open ? 'account-menu' : undefined}
                  aria-haspopup='true'
                  aria-expanded={open ? 'true' : undefined}>
                  <GridIcon sx={{ width: 20, height: 20 }} />
                </IconButton>
              </Tooltip>
            </Box>
            <Menu
              anchorEl={anchorEl}
              id='account-menu'
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
              <Box sx={{ width: '22rem', paddingLeft: 2, paddingRight: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography sx={{ m: 1, fontSize: 16, boxSizing: 'border-box' }} component='div'>
                  Shortcuts
                </Typography>
                <AddIcon sx={{ width: 20 }} />
              </Box>
              <Divider />
              <Grid container spacing={0}>
                <Grid item md={6}>
                  <MenuList sx={{ pb: '0px !important' }}>
                    <MenuItem onClick={handleClose}>
                      <ListItemIcon>
                        <CalendarIcon />
                      </ListItemIcon>
                      <ListItemText primary='Calendar' secondary={'Appointments'} />
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={handleClose}>
                      <ListItemIcon>
                        <UserIcon />
                      </ListItemIcon>
                      <ListItemText primary='Users' secondary={'Manage Users'} />
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={handleClose}>
                      <ListItemIcon>
                        <DashboardIcon />
                      </ListItemIcon>
                      <ListItemText primary='Dashboard' secondary={'User Dashboard'} />
                    </MenuItem>
                    <Divider sx={{ marginBottom: '0px !important' }} />
                  </MenuList>
                </Grid>
                <Grid item md={6}>
                  <MenuList sx={{ pb: '0px !important' }}>
                    <MenuItem onClick={handleClose}>
                      <ListItemIcon>
                        <InvoiceIcon />
                      </ListItemIcon>
                      <ListItemText primary='Invoice App' secondary={'Manage Account'} />
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={handleClose}>
                      <ListItemIcon>
                        <RoleIcon />
                      </ListItemIcon>
                      <ListItemText primary='Role Manage' secondary={'Permissions'} />
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={handleClose}>
                      <ListItemIcon>
                        <SettingsIcon />
                      </ListItemIcon>
                      <ListItemText primary='Setting' secondary={'Account Setting'} />
                    </MenuItem>
                    <Divider sx={{ marginBottom: '0px !important' }} />
                  </MenuList>
                </Grid>
              </Grid>
            </Menu>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
              <Badge badgeContent={4} color='secondary'>
                <NotificationsIcon color='action' />
              </Badge>
            </Box>
          </div>
        </div>
      </div>
    </nav>
  );
};
