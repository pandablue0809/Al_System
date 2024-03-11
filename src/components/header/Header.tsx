import React, { useEffect, useState } from 'react';

import { HeaderBaseButton } from './components/HeaderBaseButton/HeaderBaseButton';
import { HeaderDropDownButton } from './components/HeaderBaseButton/HeaderDropDownButton';
import type { HeaderDropDownMenuItem } from './components/HeaderBaseButton/HeaderDropDownButton';

import LOGO from '../../assets/images/logo/logo.svg';
import { HeaderAuthButton } from './components/HeaderBaseButton/HeaderAuthButton';

const MENU_DATA: HeaderDropDownMenuItem = {
  title: 'More',
  pathname: '/More',
  subMenus: [
    {
      title: 'About',
      pathname: '/More/About',
    },
    {
      title: 'Contact us',
      pathname: '/More/Contact us',
    },
    {
      title: 'User',
      pathname: '/More/User',
    },
    {
      title: 'Developers',
      pathname: '/More/Developers',
    },
  ],
};

const Header: React.FC = () => {
  const [status, setStatus] = useState('');

  useEffect(() => {
    console.log(status);
  }, [status]);

  const handleClick = (state: string) => {
    setStatus(state);
  };

  return (
    <div className='container relative m-0 mx-auto py-1 md:px-2'>
      <div className='max-w-full flex items-center justify-between'>
        <div className='flex w-fit items-center'>
          <img src={LOGO} width={50} height={50} alt='logo' className='h-10 w-10 md:h-16 md:w-16' style={{ overflowClipMargin: 'content-box' }} />
        </div>
        <div className='flex w-fit items-center gap-12'>
          <HeaderBaseButton>Home</HeaderBaseButton>
          <HeaderBaseButton>Explore</HeaderBaseButton>
          <HeaderBaseButton>FAQ</HeaderBaseButton>
          <HeaderDropDownButton title={MENU_DATA.title} pathname={MENU_DATA.pathname} subMenus={MENU_DATA.subMenus} onClick={handleClick} />
        </div>
        <div className='flex'>
          <div className='flex w-full flex-col-reverse'>
            <HeaderAuthButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
