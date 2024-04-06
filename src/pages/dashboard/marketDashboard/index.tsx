import React, { useEffect } from 'react';
import Card from '../../../components/videoCard/Card';

const CommonDashboard: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='relative w-full min-h-[1200px] pt-[170px] pb-[110px] md:pb-[40px] md:pt-0 bg-main-background dark:bg-main-background-dark bg-center bg-cover transition-all d-1'>
      <div
        id='main-lefttop'
        className='absolute top-[100px] right-0 w-[232px] h-[130px] md:top-[210px] md:left-[10%] md:w-[464px] md:h-[260px] bg-main-lefttop dark:bg-main-lefttop-dark bg-center bg-cover'></div>
      <div
        id='main-leftbottom'
        className='absolute top-[40%] right-0 w-[300px] h-[290px] md:bottom-0 md:left-[10%] md:w-[672px] md:h-[633px] bg-main-leftbottom dark:bg-main-leftbottom-dark bg-center bg-cover'></div>
      <div
        id='main-righttop'
        className='absolute bottom-0 right-0 w-[300px] h-[325px] md:top-[71px] md:right-[12px] md:w-[750px] md:h-[797px] bg-main-righttop dark:bg-main-righttop-dark bg-center bg-cover'></div>
      <div
        id='main-center'
        className='absolute left-[-50px] top-[20%] w-[275px] h-[225px] md:left-[calc(50%-280px)] md:top-[calc(50%-170px)] md:w-[550px] md:h-[450px] bg-main-center dark:bg-main-center-dark bg-center bg-cover z-10 pointer-events-none'></div>
      <span className='absolute top-[100px] w-full text-center block md:hidden font-semibold text-[40px] leading-[48px] tracking-[10px] text-transparent bg-clip-text bg-gradient-to-r from-[#1199FA] to-[#00DDA2]'>
        Dashboard
      </span>
      <Card
        id='main-card-earn'
        url='/auth/login'
        img='bg-main-card-earn-banner'
        video='/dashboard-banner-earn.mp4'
        className='relative ml-[20px] md:ml-0 md:absolute md:left-[calc(50%-450px)] md:top-[250px] z-20 md:z-10'
        title1='Welcome to EVOLV'
        title2=''
        btnTitle='Start Now'
        description={
          <div>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#1199FA] to-[#00DDA2]'>
              Groundbreaking platform designed to help you unlock your full potential!
            </span>
          </div>
        }
      />
      <Card
        id='main-card-borrow'
        url='/about'
        img='bg-main-card-borrow-banner'
        video='/dashboard-banner-borrow.mp4'
        className='relative ml-[calc(100%-300px)] md:ml-0 mt-[30px] md:mt-0 md:absolute md:right-[calc(50%-450px)] md:top-[320px]'
        title1='Introducing EVOLV'
        title2=''
        btnTitle='About SoTru'
        description={
          <div>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#1199FA] to-[#00DDA2]'>
              The Future of Personal Growth and Connectivity
            </span>
          </div>
        }
      />
      <Card
        id='main-card-cards'
        url='/cards'
        img='bg-main-card-cards-banner w-[123px] md:w-[168px] h-[180px] md:h-[246px]'
        video=''
        className='relative ml-[20px] md:ml-0 mt-[30px] md:mt-0 md:absolute md:left-[calc(50%-450px)] md:top-[650px]'
        title1='Inventory Management'
        title2='to Invoicing'
        btnTitle='Cards'
        description={
          <div>
            <p>Crypto or Fiat, for choice.</p>
            <br />
            <p>
              Connect to your cards & enjoy your{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#1199FA] to-[#00DDA2]'>SoTru</span> Benefits
            </p>
          </div>
        }
      />
      <Card
        id='main-card-stocks'
        url='/stocks'
        title2='in the Age of AI'
        img='bg-main-card-stocks-banner'
        video='/dashboard-banner-stocks.mp4'
        className='relative ml-[calc(100%-300px)] mb-[70px] md:mb-0 md:ml-0 mt-[30px] md:mt-0 md:absolute md:right-[calc(50%-450px)] md:top-[720px] z-20'
        title1='Expanding Perspectives'
        btnTitle='Stocks'
        description={
          <div>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#1199FA] to-[#00DDA2]'>The Rise of Multiple Perspectives</span>
          </div>
        }
      />
    </div>
  );
};

export default CommonDashboard;
