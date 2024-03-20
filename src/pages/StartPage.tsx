import React from 'react';
import { Button } from '@nextui-org/button';
import Header from '../components/header/Header';
import Logo from '../assets/images/intrologo.png';
import TextAnimation from '../components/animation/text/TextAnimation';

const StartPage: React.FC = () => {
  return (
    <div className='start-page'>
      <div className='relative h-screen'>
        <Header />
        <div className=''>
          <div className='w-full double-background'>
            <div className='container mx-auto flex gap-x-4 h-full items-center'>
              <img src={Logo} alt='animate-logo' className='w-56 h-56 md:w-60 md:h-60 lg:w-80 lg:h-80 xl:w-auto xl:h-auto ease-in duration-500' />
              <div className='flex flex-col gap-y-16'>
                <div className='flex flex-col gap-y-8'>
                  <TextAnimation>Connecting the AI world</TextAnimation>
                  <div className='relative antialiased' style={{ fontFamily: 'Poppins' }}>
                    <div className='relative flex flex-col justify-center overflow-hidden'>
                      <div className='w-full max-w-6xl mx-auto px-4 md:px-6'>
                        <div className='text-center'>
                          <div className='font-extrabold text-3xl md:text-4xl [text-wrap:balance] bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 to-50% to-slate-200'>
                            Trusted by the most innovative minds in &nbsp;
                            <span className='text-indigo-500 inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden'>
                              <ul className='block animate-text-slide-5 text-left leading-tight [&_li]:block'>
                                <li>Finance</li>
                                <li>Tech</li>
                                <li>AI</li>
                                <li>Crypto</li>
                                <li>eCommerce</li>
                                <li aria-hidden='true'>Finance</li>
                              </ul>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='flex'>
                  <Button>Get Start</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartPage;
