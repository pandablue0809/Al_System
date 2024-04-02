import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useWindowSize from '../utils/useWindowSize';
import ThreeCard from '../components/animation/card/ThreeCard';
import CEOImage from '../assets/images/_intro/introdashboard/CEO.png';
import CTOImage from '../assets/images/_intro/introdashboard/CTO.png';
import BotImage from '../assets/images/_intro/introdashboard/BOT.png';
import AIImage1 from '../assets/images/_intro/introdashboard/AI1.jpg';
import AIImage2 from '../assets/images/_intro/introdashboard/AI2.jpg';
import AIImage3 from '../assets/images/_intro/introdashboard/AI3.jpg';
import Divider from '../assets/images/_intro/introdashboard/divider.svg';
import Crown from '../assets/images/_intro/introdashboard/crown.svg';
import IntroLogo from '../assets/images/_intro/introdashboard/introllogo.png';
import Text_Divider from '../assets/images/_intro/introdashboard/text_divider.svg';

const Introdashboard: React.FC = () => {
  const size = useWindowSize();
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (size.width !== undefined) {
      if (size.width <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }
  }, [size]);

  return (
    <div className='bg-[#3C414A]'>
      <div className='relative w-full h-screen bg-introdashboard-section1-bg bg-no-repeat bg-cover'>
        <div className='invisible md:visible md:pt-[26vh] md:mx-[14.61%] md:text-[24px] text-white md:leading-[29px] md:font-[400]'>
          Welcome to the SoTru
        </div>
        {/* <ImageSlider>
        {images.map((image, index) => {
          return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
        })}
      </ImageSlider> */}
      </div>
      <div className='relative w-full md:leading-[116px] overflow-hidden'>
        <div className='absolute'>
          <div className='relative w-[50px] h-[50px] rotate-[45deg]'>
            <div className='star' />
          </div>
        </div>
        <div className='absolute left-[29px] top-[87px] right-[190px] bottom-[16px] bg-introdashboard-starimage bg-cover bg-center z-0' />
        <div className='absolute right-[-77px] bottom-[-400px] w-[368.61px] h-[426.14px] bg-introdashboard-shape1 bg-cover bg-center' />
        <div className='pt-[14vh] md:pt-[30vh] px-[20px] md:px-0 text-[45px] md:text-[96px] drop-shadow-[0_4px_17px_rgba(0,0,0,0.58)] text-[#1199FA] md:font-[600] text-left md:text-center'>
          <span>Connect</span>
          <span className='text-[#FFF]'> with AI tech professional team </span>
          {isMobile && <br />}
          <span className='text-[#FFF]'>in all countries.</span>
        </div>
        <div
          className='md:mt-[20px] md:w-[800px] px-[20px] md:px-0 md:pb-[85px] text-[#FFF] text-left md:text-justify text-[18px] md:text-[24px] md:leading-[29px] font-[400] md:font-[500] md:mx-auto'
          style={{ textAlignLast: isMobile ? 'left' : 'center' }}>
          Talent is global and your location shouldn&apos;t limit opportunities. SoTru&apos;s vibrant community of tech professionals are ready to
          support you in your career. From networking with the best to AI tech integration, our community is dedicated to helping each other succeed.
        </div>
      </div>
      <button
        className='text-white block bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-10 py-4 text-center mt-0 mb-2 mx-auto cursor-pointer z-10'
        onClick={() => navigate('/auth/login')}>
        Join for free
      </button>
      <div className='w-full max-w-[90rem] mx-auto box-border'>
        <div className='flex items-center justify-center' style={{ flexFlow: 'wrap' }}>
          <div
            style={{
              gridColumnGap: 16,
              gridRowGap: 16,
              gridTemplateRows: 'auto auto',
              gridTemplateColumns: '1fr 1fr 1fr',
              gridAutoColumns: '1fr',
              display: 'grid',
              marginTop: '19vh',
            }}>
            <ThreeCard avatar={CEOImage} name='Alexadru Suteu' role='CEO' />
            <ThreeCard avatar={CTOImage} role='CTO' name='Tahara Kazuki' />
            <ThreeCard avatar={BotImage} name='Virtual Assitant' role='Assitant' />
          </div>
        </div>
      </div>
      <button
        className='text-white block bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-10 py-4 text-center mt-[10vh] mb-2 mx-auto cursor-pointer z-10'
        onClick={() => navigate('/auth/login')}>
        Show more
      </button>
      <section className='mb-[19vh] mt-[19vh]'>
        <div className='max-w-[90em] md:max-w-[90rem] w-full mx-auto box-border'>
          <div className='flex justify-between'>
            <div className='w-[90%] md:w-1/2 bg-[#1b1b1b] rounded-[80px] justify-center items-center mr-[40px] p-[40px] flex relative'>
              <div className='bg-[#232221] rounded-[80px]'>
                <div className='w-full h-[110px] md:h-[161px] bg-[rgba(22, 22, 22, 0.79)] border-[1px] border-solid border-white rounded-[20px] justify-center items-center flex absolute top-auto bottom-0 left-0 md:left-[3%]'>
                  <div className='justify-around flex'>
                    <div className=' text-left leading-[20px]'>
                      <h6 className='text-[20px] md:text-[24px] mt-[10px] mb-[10px] font-semibold leading-[30px]'>586</h6>
                      <div className='leading-[16px] text-[12px]'>
                        Working <br /> Days
                      </div>
                    </div>
                    <img
                      className='inline-block border-0 max-w-full align-middle ml-[20px] mr-[20px] md:ml-[29px] md:mr-[29px]'
                      src={Divider}
                      loading='lazy'
                      alt='mission'
                    />
                    <div className=' text-left leading-[20px]'>
                      <h6 className='text-[20px] md:text-[24px] mt-[10px] mb-[10px] font-semibold leading-[30px]'>2036</h6>
                      <div className='leading-[16px] text-[12px]'>
                        Happy <br /> Clients
                      </div>
                    </div>
                    <img
                      className='inline-block border-0 max-w-full align-middle ml-[20px] mr-[20px] md:ml-[29px] md:mr-[29px]'
                      src={Divider}
                      loading='lazy'
                      alt='mission'
                    />
                    <div className=' text-left leading-[20px]'>
                      <h6 className='text-[20px] md:text-[24px] mt-[10px] mb-[10px] font-semibold leading-[30px]'>1132</h6>
                      <div className='leading-[16px] text-[12px]'>
                        Successfull <br /> Story
                      </div>
                    </div>
                    <img
                      className='inline-block border-0 max-w-full align-middle ml-[20px] mr-[20px] md:ml-[29px] md:mr-[29px]'
                      src={Divider}
                      loading='lazy'
                      alt='mission'
                    />
                    <div className='text-left leading-[20px]'>
                      <h6 className='text-[20px] md:text-[24px] mt-[10px] mb-[10px] font-semibold leading-[30px]'>56</h6>
                      <div className='leading-[16px] text-[12px]'>
                        Perfect <br /> Service
                      </div>
                    </div>
                  </div>
                  <div
                    className='w-[70px] h-[70px] md:w-[100px] md:h-[100px] bg-[#fe8a31] rounded-full justify-center items-center flex absolute'
                    style={{ top: '-44%', bottom: 'auto' }}>
                    <img src={Crown} loading='lazy' width={30} alt='symbol' />
                  </div>
                </div>
                <img
                  src={IntroLogo}
                  style={{
                    overflowClipMargin: 'content-box',
                    overflow: 'clip',
                    border: 0,
                    maxWidth: '100%',
                    verticalAlign: 'middle',
                    display: 'inline-block',
                    borderRadius: 80,
                  }}
                />
              </div>
            </div>
            <div className='w-full md:w-1/2 flex flex-col justify-center items-start'>
              <div className='text-white block' style={{ marginBlockStart: '1em', marginBlockEnd: '1em', marginInlineStart: 0, marginInlineEnd: 0 }}>
                About us
              </div>
              <h3 className='font-semibold text-[1.75em] md:text-[3rem] md:mt-[10px]'>
                We Are Ready to Making You Different<span className='text-[#1199FA]'> from others</span>
              </h3>
              <img
                src={Text_Divider}
                className='border-0 max-w-full align-middle inline-block mt-[29px] mb-[21px] overflow-clip'
                style={{ overflowClipMargin: 'content-box' }}
                loading='lazy'
                alt=''
              />
              <p
                className='mb-0 md:mb-10 leading-3 md:leading-[30px] block text-[1.1em] md:text-[1.375em]'
                style={{ marginBlockStart: '1em', marginBlockEnd: '1em', marginInlineStart: 0, marginInlineEnd: 0 }}>
                In 2023, before &apos;generative AI&apos; was a buzzword, Alexandru and Tahara were grinding through the world of AI. Frustrated by
                the slow, painstaking process of traditional...
                {/* 
                 methods and uninspired by the soulless automation available, they teamed up.  */}
                {/* Their mission: to use AI not just to make his work faster, but to make them matter—
                to ensure every second a viewer spent working was a second well spent.
                They wanted to help marketers not just catch eyes, but spark action. Alexandru brought a knack for storytelling coupled with the
                hard-earned wisdom of a serial founder in AI. Tahara brought a decade of deep learning and computer vision expertise from the trenches
                of Amazon's AI initiatives. */}
              </p>
              <button
                className='text-white block bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-10 py-4 text-center mt-0 md:mt-8 mb-2 mx-auto cursor-pointer z-10'
                onClick={() => navigate('/auth/login')}>
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='w-full'>
        <div className='flex w-full h-fit flex-row p-24'>
          <div className='md:mx-auto md:w-[60%] text-center text-[48px] md:text-[64px] leading-[57px] md:leading-[76px] text-[#FFF] font-[500] md:drop-shadow-[0_0_2px_#FFFFFF]'>
            <span>Built by SoTru.</span>
            <br /> <span>AI Evolution is here.</span>
          </div>
          <div className='w-full  h-fit flex justify-center mt-[20vh] md:mt-[100px] mx-auto'>
            <div className='stack'>
              <div className='layer layer_1'>
                <img className='w-72 h-72 bg-cover bg-no-repeat bg-center items-center rounded-xl shadow-2xl' src={AIImage1} />
              </div>
              <div className='layer layer_2'>
                <img className='w-72 h-72 bg-cover bg-no-repeat bg-center items-center rounded-xl shadow-2xl' src={AIImage2} />
              </div>
              <div className='layer layer_3'>
                <img className='w-72 h-72 bg-cover bg-no-repeat bg-center items-center rounded-xl shadow-2xl' src={AIImage3} />
              </div>
            </div>
          </div>
        </div>
        <div
          className={`flex flex-col md:flex-row items-center ${'mt-[10vh]'} md:mx-auto md:bg-introdashboard-earn-back md:bg-contain md:bg-no-repeat bg-center md:w-[80%] md:h-[35vh]`}>
          {isMobile && <div className='text-[74px] leading-[88px] font-[600] text-[#1199FA] mb-[30px]'>EARN</div>}
          <div className='md:mx-auto md:w-[90%] text-[#FFF] text-[32px] md:text-[64px] text-center leading-[38px] md:leading-[76px] font-[500] md:drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]'>
            <span>Enjoy the world of AI for free!</span>
          </div>
        </div>
        <div className='mt-[20px] mx-auto w-[90%] md:w-[70%] flex flex-row justify-between'>
          <div className='w-[60%]'>
            {!isMobile && (
              <div className='md:mt-[16vh] md:text-[45px] md:leading-[57px] md;font-[600] text-[#1199FA]'>
                No company will be able to develop and integrate convenient services like this. Only SoTru can.
              </div>
            )}
            <div className='mt-[30px] md:mt-[15px] text-[#FFF] text-[14px] md:text-[16px]'>
              You will no longer have headaches from complex tasks and schedule creation. AI accurately solves all problems, from the basic to the
              complex. No business system can replace this.
            </div>
            {!isMobile && (
              <div className='flex flex-row items-center justify-between md:mt-[40px] md:w-[253px] text-[#FFF] bg-[#1199FA] rounded-[2px] p-[15px]'>
                <div className='cursor-pointer' onClick={() => navigate('/introearn')}>
                  Product List
                </div>
                <div className='bg-introdashboard-arrow bg-cover bg-center md:w-[49px] md:h-[15px]'></div>
              </div>
            )}
          </div>
          <div className='w-[40vw] md:w-[calc(80vh*334/675)] h-[calc(40vw*675/334)] md:h-[80vh] bg-introdashboard-fullphone bg-cover bg-center'></div>
        </div>
        {isMobile && (
          <div className='flex flex-row items-center justify-between mt-[30px] mb-[60px] mx-auto w-[40vw] md:w-[253px] text-[#FFF] text-[16px] border-[1px] border-[#FFF] rounded-[2px] p-[15px]'>
            <div onClick={() => navigate('/introearn')}>Calculate</div>
            <div className='bg-introdashboard-arrow bg-cover bg-center w-[30px] md:w-[49px] h-[10px] md:h-[15px]'></div>
          </div>
        )}
        <div className='bg-introdashboard-linegroup bg-cover bg-center w-[100%] h-[calc(100vw*313/1512)]'></div>
        <div className='relative overflow-hidden'>
          <div className='absolute left-[-5%] w-[215px] h-[150.95px] bg-introdashboard-shape2 bg-cover bg-center'></div>
          <div className='absolute right-[-3%] top-[90px] w-[205px] h-[175px] bg-introdashboard-shape3 bg-cover bg-center0'></div>
          <div className='flex flex-col md:flex-row items-center mt-[90px] md:mx-auto md:bg-introdashboard-borrow-back md:bg-contain md:bg-no-repeat md:bg-center md:w-[80%] md:h-[25vh]'>
            {isMobile && <div className='text-[74px] leading-[88px] font-[600] text-[#1199FA] mb-[30px]'>BORROW</div>}
            <div className='md:w-[70%] md:mx-auto text-[32px] md:text-[64px] leading-[38px] md:leading-[76px] md:font-[600] text-[#FFF] text-center drop-shadow-[0px_0px_2px_#FFFFFF]'>
              Use all services all the time. Insufficient knowledge is learned on its own during the process of use.
            </div>
          </div>
          {!isMobile && (
            <div className='md:mt-[100px] mx-auto md:w-[70%] text-[#ffffffeb] md:text-center md:text-[18px] md:leading-[24px] md:font-[500]'>
              Welcome to the business AI system of the future. A system designed to serve you, and not the other way around. You have to reimagine the
              way you work. SoTru brings you the future of AI&apos;s new life where everyone work more easy.
            </div>
          )}
        </div>
        <div className='relative pt-[30px] md:pt-[35vh] md:pb-[20vh] md:w-full overflow-hidden'>
          <div className='absolute left-[-7%] top-[55vh] w-[318px] h-[208px] bg-introdashboard-shape4 bg-cover bg-center0' />
          <div className='relative w-[90%] md:w-[70%] mx-auto min-h-[calc(60vw*679/643)] md:min-h-[80vh] md:h-[80vh] flex items-center overflow-hidden'>
            <div className='absolute right-0 top-0 w-[60vw] md:w-[calc(80vh*643/679)] h-[calc(60vw*679/643)] md:h-[80vh] bg-introdashboard-iPhone-2 bg-cover bg-center' />
            <div className='w-[60%] md:w-[55%]'>
              {!isMobile && (
                <div className='md:text-[45px] md:leading-[54px] text-[#1199FA] md:font-[600]'>
                  Automate to 100% of your all work{' '}
                  <span>
                    <strong>instantly</strong>{' '}
                  </span>
                  <span>
                    <strong>permissionless. </strong>
                  </span>
                  No Pay.
                </div>
              )}
              <div className='md:mt-[10px] text-[#FFF] text-[14px]'>
                It provides a convenient environment for users by instantly converting voice to text and text to voice.
              </div>
              {!isMobile && (
                <button
                  className='text-white block bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-10 py-4 text-center mt-[5vh] mb-2 mx-auto cursor-pointer z-10'
                  onClick={() => navigate('/auth/login')}>
                  Service List
                </button>
              )}
            </div>
          </div>
        </div>
        {isMobile && (
          <div className='flex flex-row justify-between px-[15px] mt-[30px] mb-[80px] mx-auto text-[16px] leading-[19px] font-[500] text-[#FFF] border-[1px] border-[#FFF] w-[252px] h-[52px] items-center'>
            <div onClick={() => navigate('/introborrow')}>Service List</div>
            <div className='bg-introdashboard-arrow bg-cover bg-center w-[30px] md:w-[49px] h-[10px] md:h-[15px]' />
          </div>
        )}
        <div className='relative mt-[150px] md:mt-[15vh] mx-auto w-[90%] md:w-[70%] h-[40vh] md:h-[60vh] overflow-hidden'>
          <div className='text-[40px] md:text-[80px] leading-[48px] md:leading-[116px] font-[600] text-[#FFF]'>
            <span className='text-[#1199FA] md:text-[#FFF]'>B</span>e part of SoTru {isMobile && <br />}
            <span className='text-[#1199FA] md:text-[#FFF]'>A</span>I {isMobile && <br />} <span className='text-[#1199FA] md:text-[#FFF]'>E</span>
            volution.
          </div>
          <div className='w-[45%] mt-[20px] text-[#FFF] text-[14px] md:text-[20px] leading-[17px] md:leading-[24px] md:font-[400]'>
            Get access to unmatched high effective on your work impossible for your legacy AI technology. A new AI system to serve YOU.
          </div>
          {!isMobile && (
            <div className='md:mt-[30px] flex justify-start'>
              <div
                className='bg-[#FFF] text-[#000] md:py-[9px] md:px-[34px] rounded-[20px] md:text-[24px] md:leading-[29px] md:font-[500] cursor-pointer'
                onClick={() => navigate('/dashboard')}>
                Start Now
              </div>
            </div>
          )}
          <div className='absolute bottom-0 right-0 w-[60vw] md:w-[33vw] h-[calc(60vw*443/577)] md:h-[calc(33vw*443/577)] bg-introdashboard-maccom bg-cover bg-center'></div>
        </div>
        {isMobile && (
          <div className='mt-[40px] flex justify-center'>
            <div
              className='bg-[#1199FA] text-[#FFF] py-[17px] px-[87px] rounded-[10px] text-[18px] leading-[21px] font-[600]'
              onClick={() => navigate('/dashboard')}>
              Start Now
            </div>
          </div>
        )}
        <div className='md:w-full h-[20vh] md:h-[30vh]' />
      </div>
    </div>
  );
};

export default Introdashboard;
