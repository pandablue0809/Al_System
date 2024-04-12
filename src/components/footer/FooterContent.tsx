import React from 'react';

import { useNavigate } from 'react-router-dom';

import { IconButton } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AppleIcon from '@mui/icons-material/Apple';
import AdbIcon from '@mui/icons-material/Adb';

const FooterContent: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className='relative h-[685px] md:w-full md:h-[568px] bg-[#25284b]'>
      <div className='w-full h-[46px] md:h-0'></div>
      <div className='absolute bg-gray-900 bg-opacity-70 h-[480px] bottom-[50px] left-0 md:w-[70%] md:left-[15%] rounded-2xl' />
      <div className='flex flex-col bg-contact-map bg-cover h-full'>
        <div
          className={`relative px-[31px] md:absolute md:mt-0 md:left-[20%] md:px-0 md:top-[100px] md:w-[60%] flex flex-col md:flex-row md:justify-between`}>
          <div>
            <div className='mb-[10px] leading-[29px] text-[24px] font-[600] md:mb-[13.9px] md:leading-[33px] md:text-[28px] text-[#FFFFFF] md:font-[500]'>
              Contact Us
            </div>
            <div className='p-[5px] text-[20px] leading-[24px] md:p-0 md:text-[16px] md:font-[300] md:leading-[29px] cursor-pointer'>
              <a href='#'>Alexandru@sotru.io</a>
            </div>
            <div className='p-[5px] text-[20px] leading-[24px] md:p-0 md:text-[16px] md:font-[300] md:leading-[29px] cursor-pointer'>
              <a href='#'> +1 650 600 1357</a>
            </div>
            <div className='p-[5px] text-[20px] leading-[24px] md:p-0 md:text-[16px] md:font-[300] md:leading-[29px] cursor-pointer'>
              <a href='#'>Sotru.io</a>
            </div>
          </div>
          <div>
            <div className='mt-5 md:mt-0 mb-3 leading-7 text-6 font-bold md:mb-3 md:leading-8 md:text-7 text-[#FFFFFF] md:font-semibold'>
              Quick Links
            </div>
            <a
              className='p-1 text-[20px] leading-6 md:p-0 md:text-[16px] md:font-[300] md:leading-7 cursor-pointer'
              onClick={() => navigate('/introdashboard')}>
              Sotru
            </a>
            <a className='p-1 text-[20px] leading-6 md:p-0 md:text-4 md:font-[300] md:leading-7 cursor-pointer' onClick={() => navigate('/about')}>
              About us
            </a>
            <a
              className='p-1 text-[20px] leading-6 md:p-0 md:text-[16px] md:font-[300] md:leading-7 cursor-pointer'
              onClick={() => navigate('/dashboard')}>
              Start now
            </a>
          </div>
          <div>
            <div className='mb-2 leading-7 text-[24px] font-[600] md:mb-3 md:leading-8 md:text-[28px] text-[#FFFFFF] md:font-[500]'>Developers</div>
            <div
              className='p-1 text-[20px] leading-6 md:p-0 md:text-[16px]  md:font-[300] md:leading-7 cursor-pointer'
              onClick={() => navigate('/introteam')}>
              Team
            </div>
          </div>
          <div>
            <div className='md:mb-[13.9px] leading-[33px] text-[28px] text-[#FFFFFF] font-[500]'>Learn</div>
            <div
              className='p-[5px] text-[20px] leading-[24px] md:p-0 md:text-[16px]  md:font-[300] md:leading-[29px] cursor-pointer'
              onClick={() => navigate('/introearn')}>
              Help & Support
            </div>
            <div
              className='p-[5px] text-[20px] leading-[24px] md:p-0 md:text-[16px]  md:font-[300] md:leading-[29px] cursor-pointer'
              onClick={() => navigate('/introborrow')}>
              Privacy Policy
            </div>
            <div
              className='p-[5px] text-[20px] leading-[24px] md:p-0 md:text-[16px]  md:font-[300] md:leading-[29px] cursor-pointer'
              onClick={() => navigate('/introborrow')}>
              Terms and Service
            </div>
          </div>
        </div>
        <div className='relative px-[31px] md:absolute md:mt-0 md:left-[20%] md:px-0 md:top-[340px] md:w-[60%] flex flex-row justify-between'>
          <div className='flex flex-row items-center gap-1'>
            <span>Follow Us &nbsp;</span>
            <IconButton size='large'>
              <FacebookIcon fontSize='inherit' />
            </IconButton>
            <IconButton size='large'>
              <TwitterIcon fontSize='inherit' />
            </IconButton>
            <IconButton size='large'>
              <InstagramIcon fontSize='inherit' />
            </IconButton>
            <IconButton size='large'>
              <LinkedInIcon fontSize='inherit' />
            </IconButton>
          </div>
          <div className='flex flex-row items-center gap-1'>
            <span> Mobile app &nbsp;</span>
            <IconButton size='large'>
              <AppleIcon fontSize='inherit' />
            </IconButton>
            <IconButton size='large'>
              <AdbIcon fontSize='inherit' />
            </IconButton>
          </div>
        </div>
      </div>
      <div className='absolute flex flex-col bottom-[36px] w-full md:flex-row items-center justify-center md:w-[65.22%] md:bottom-[104px] mx-[calc((100vw-360px)/2)] md:mx-0 px-[31px] md:left-[17.39%]'>
        <div className='text-[10px] mb-[16px] md:mb-[5px] md:text-[14px] dark:text-[#F9D3B4] text-[#ffffff70] text-center'>
          Copyright © 2024 Sotru.io. All rights reserved.
        </div>
      </div>
      <hr className='absolute bottom-[70px] w-full md:flex-row items-center md:w-[65.22%] md:bottom-[160px] mx-[calc((100vw-360px)/2)] md:mx-0 px-[31px] md:left-[17.39%]' />
    </div>
  );
};

export default FooterContent;
