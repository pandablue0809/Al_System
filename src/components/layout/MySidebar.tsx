import React, { useState } from 'react';

import { Menu, MenuItem, Sidebar } from 'react-pro-sidebar';

import { FaList, FaRegHeart } from 'react-icons/fa';
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi';
import { SiWorkplace } from 'react-icons/si';
import { RiPencilLine } from 'react-icons/ri';
import { BiCog } from 'react-icons/bi';
import LOGO from '../../assets/images/logo/logo.svg';

import './MySidebar.css';

export type MySidebarProps = {
  value?: string;
  onChange?: (newValue: string) => void;
};

const MySidebar: React.FC<MySidebarProps> = ({ onChange }) => {
  const [menuCollapse, setMenuCollapse] = useState(false);

  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <>
      <div id='header'>
        <Sidebar collapsed={menuCollapse}>
          <div className='logotext'>
            <div className='flex justify-center items-center'>
              <img src={LOGO} alt='logo' className='h-8 w-8 md:h-10 md:w-10' />

              {!menuCollapse && <span className='ml-3'>SoTru</span>}
            </div>
          </div>
          <div className='closemenu' onClick={menuIconClick}>
            {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
          </div>
          <Menu>
            <MenuItem active={true} icon={<FiHome />}>
              Work
            </MenuItem>
            <MenuItem icon={<FaList />}>Category</MenuItem>
            <MenuItem icon={<FaRegHeart />}>Favourite</MenuItem>
            <MenuItem icon={<RiPencilLine />}>Author</MenuItem>
            <MenuItem icon={<BiCog />}>Settings</MenuItem>
          </Menu>
          <Menu>
            <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
          </Menu>
        </Sidebar>
      </div>
    </>
  );
};

export default MySidebar;
