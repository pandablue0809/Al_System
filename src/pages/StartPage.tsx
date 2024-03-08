import React from 'react';
import Header from '../components/header/Header';
import Logo from '../assets/images/intrologo.png';
import TextAnimation from '../components/animation/text/TextAnimation';

const StartPage: React.FC = () => {
  return (
    <div className='start-page'>
      <div className='relative'>
        <Header />
        <div className=''>
          <div className='w-full relative double-background'>
            <div className='absolute flex h-full left-10 sm:left-36 items-center'>
              <img src={Logo} alt='animate-logo' className='w-40 h-40 sm:w-auto sm:h-auto ease-in duration-500' />
              <TextAnimation />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartPage;
