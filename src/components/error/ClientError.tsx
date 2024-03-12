import React, { ChangeEvent, useEffect, useState } from 'react';
import ClientErrorImage from '../../assets/images/error/client-error.svg';

const ClientError: React.FC = () => {
  return (
    <div className='h-screen w-full min-h-0 p-2 justify-center overflow-hidden flex'>
      <div className='flex flex-col lg:flex-row-reverse items-center py-15 px-5 rounded-md  justify-center pt-30'>
        <div className='relative flex'>
          <img src={ClientErrorImage} />
        </div>
        <div className='relative flex flex-col items-center'>
          <span className='break-words text-[4rem] font-semibold mb-[1.8rem]'>Oops!</span>
          <span className=' break-words text-4xl font-semibold mb-[1.8rem]'>Sorry, page not found!</span>
          <a className='ant-btn ant-btn-link' href='/'>
            Return to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default ClientError;
