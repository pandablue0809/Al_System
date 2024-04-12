import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

import EmailInput from '../../common/input/EmailInput';

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    console.log('here');
  };

  return (
    <div className='relative w-full pb-[110px] md:pb-[40px] md:pt-0 bg-main-background dark:bg-main-background-dark bg-center bg-cover transition-all duration-1000 flex flex-col h-screen justify-center flex-wrap content-center'>
      <div
        id='main-lefttop'
        className='absolute top-[100px] right-0 w-[232px] h-[130px] md:top-[210px] md:left-[10%] md:w-[464px] md:h-[260px] bg-main-lefttop dark:bg-main-lefttop-dark bg-center bg-cover'></div>
      <div
        id='main-leftbottom'
        className='absolute top-[10%] right-0 w-[300px] h-[290px] md:bottom-0 md:left-[10%] md:w-[672px] md:h-[633px] bg-main-leftbottom dark:bg-main-leftbottom-dark bg-center bg-cover'></div>
      <div
        id='main-righttop'
        className='absolute bottom-0 right-0 w-[300px] h-[325px] md:top-[71px] md:right-[12px] md:w-[750px] md:h-[797px] bg-main-righttop dark:bg-main-righttop-dark bg-center bg-cover'></div>
      <div
        id='main-center'
        className='absolute left-[-70px] top-[20%] w-[275px] h-[225px] xl:left-[calc(70%-150px)] md:left-[calc(50%-900px)] md:top-[calc(20%-170px)] md:w-[550px] md:h-[450px] bg-main-center dark:bg-main-center-dark bg-center bg-cover pointer-events-none z-20'></div>

      <div className='first-line:items-center z-10'>
        <div className='items-center flex justify-center bg-black bg-opacity-60 rounded-3xl shadow-orange-200 lg:px-16 px-8 py-32 align-middle '>
          <div>
            <div className='mb-10'>
              <h1 className='md:text-left  text-white text-center text-[24px] font-semibold mb-2' style={{ fontFamily: 'Poppins' }}>
                Reset <span className='text-[#ff69a5] ml-1'>Password</span>
              </h1>
              <p className='ml-2'>Enter your email address and we’ll send an verification code to reset your password.</p>
            </div>
            <label className='requireLabel' title='Email'>
              Email
            </label>
            <EmailInput value={email} onChange={setEmail} />
            <p className='ml-2'>
              Would you like to return to the
              <Link to='/auth/login' aria-current='page' className='text-[#1890ff] no-underline ml-2'>
                login page?
              </Link>
            </p>
            <div className='flex items-center justify-between my-5'>
              <Button
                variant='contained'
                sx={{
                  backgroundColor: '#ff69a5',
                  '&:hover': {
                    backgroundColor: '#f779a5',
                  },
                  mx: 1,
                  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
                  fontWeight: '500',
                  fontSize: '16px',
                  boxSizing: 'border-box',
                  color: 'white',
                  px: 9,
                  width: '100%',
                  height: '2.5rem',
                  borderRadius: '5px',
                }}
                onClick={handleSubmit}>
                <span>Send Instructions</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
