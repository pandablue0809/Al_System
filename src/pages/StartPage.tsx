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
          <div className='w-full double-background'>
            <div className='container mx-auto flex gap-x-4 h-full items-center'>
              <img src={Logo} alt='animate-logo' className='w-56 h-56 md:w-60 md:h-60 lg:w-80 lg:h-80 xl:w-auto xl:h-auto ease-in duration-500' />
              <div className='flex'>
                <TextAnimation>Connecting the AI world</TextAnimation>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartPage;
