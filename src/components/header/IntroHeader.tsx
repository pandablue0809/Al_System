import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LOGO from '../../assets/images/logo/logo.svg';
import type { HeaderDropDownMenuItem } from './components/HeaderBaseButton/HeaderDropDownButton';
import { HeaderDropDownButton } from './components/HeaderBaseButton/HeaderDropDownButton';

const MENU_DATA: HeaderDropDownMenuItem = {
  title: 'Resources',
  pathname: '/Resources',
  subMenus: [
    {
      title: 'Example Videos',
      pathname: '/resources/example-video',
    },
    {
      title: 'Case Studies',
      pathname: '/resources/case-studies',
    },
    {
      title: 'Synthesia Academy',
      pathname: '/resources/synthesia-academy',
    },
    {
      title: 'Webinars',
      pathname: '/resources/webinars',
    },
    {
      title: 'Help Center',
      pathname: '/resources/help-center',
    },
    {
      title: 'Create a free video',
      pathname: '/resources/free-video',
    },
    {
      title: 'Book a demo',
      pathname: '/resources/book-demo',
    },
  ],
};

const company_menu_data: HeaderDropDownMenuItem = {
  title: 'Company',
  pathname: 'company',
  subMenus: [
    {
      title: 'About us',
      pathname: '/company/about',
    },
    {
      title: 'AI Research',
      pathname: '/company/research',
    },
    {
      title: 'Ethics',
      pathname: '/company/ethics',
    },
    {
      title: 'Security',
      pathname: '/company/security',
    },
    {
      title: 'Careers',
      pathname: '/company/careers',
    },
    {
      title: 'Blog',
      pathname: '/company/blog',
    },
    {
      title: 'Press Kit',
      pathname: '/company/press',
    },
  ],
};

export const IntroHeader: React.FC = () => {
  const [status, setStatus] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    console.log(status);
  }, [status]);

  const handleClick = (state: string) => {
    setStatus(state);
  };

  return (
    <nav className='fixed top-0 z-50 bottom-auto left-0 right-0 bg-[#061121]'>
      <div className='container mx-auto'>
        <div className='z-10 items-center justify-between h-16 flex pl-4 md:pl-10 pr-4 md:pr-10 relative box-border'>
          <div className='p-2 inline-block max-w-full'>
            <img className='w-10' src={LOGO} />
          </div>
          <div className='justify-between flex static' style={{ flex: 1 }}>
            <div className='justify-between w-full flex'>
              <ul className='gap-x-6 my-0 mx-auto px-0 flex list-none'>
                <li>
                  <button className='text-white hover:text-[#696CFF] transition duration-1000 delay-100 px-2.5 py-2.5 text-center inline-flex items-center'>
                    Home
                  </button>
                </li>
                <li>
                  <button className='text-white hover:text-[#696CFF] transition duration-1000 delay-100 px-2.5 py-2.5 text-center inline-flex items-center'>
                    Resources
                  </button>
                </li>
                <li>
                  <HeaderDropDownButton title={MENU_DATA.title} pathname={MENU_DATA.pathname} subMenus={MENU_DATA.subMenus} onClick={handleClick} />
                </li>
                <li>
                  <HeaderDropDownButton
                    title={company_menu_data.title}
                    pathname={company_menu_data.pathname}
                    subMenus={company_menu_data.subMenus}
                    onClick={handleClick}
                  />
                </li>
                <li>
                  <button className='text-white hover:text-[#696CFF] transition duration-1000 delay-100 px-2.5 py-2.5 text-center inline-flex items-center'>
                    Contact Us
                  </button>
                </li>
              </ul>
            </div>
            <div className=''>
              <button
                className='text-white block bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 w-max font-medium rounded-lg text-sm px-10 py-2.5 text-center mt-0 mb-2 mx-auto cursor-pointer z-10'
                onClick={() => navigate('/auth/login')}>
                Join for free
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
