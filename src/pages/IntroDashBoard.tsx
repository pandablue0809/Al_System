import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useWindowSize from '../utils/useWindowSize';
import ThreeCard from '../components/animation/card/ThreeCard';
import Tahara from '../assets/images/_intro/introdashboard/asano.png';
import AIImage1 from '../assets/images/_intro/introdashboard/AI1.jpg';
import AIImage2 from '../assets/images/_intro/introdashboard/AI2.jpg';
import AIImage3 from '../assets/images/_intro/introdashboard/AI3.jpg';

const Introdashboard: React.FC = () => {
  const size = useWindowSize();
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [showDemo, setShowDemo] = useState<boolean>(false);
  const [showDemo1, setShowDemo1] = useState<boolean>(true);

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

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDemo1(!showDemo1);
    }, 4000);
    return () => clearTimeout(timer);
  }, [showDemo1]);

  return (
    <div className='bg-[#10213f]'>
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
      <div className='flex flex-row gap-x-16 w-full px-40 justify-center mt-[19vh]'>
        <ThreeCard />
        <ThreeCard avatar={Tahara} role='CTO' name='Tahara Kazuki' location='Saeby town, North Denmark' position='Machine Learning Engineer' />
        <ThreeCard />
        <ThreeCard />
      </div>
      <button
        className='text-white block bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-10 py-4 text-center mt-[10vh] mb-2 mx-auto cursor-pointer z-10'
        onClick={() => navigate('/auth/login')}>
        Show more
      </button>
      <div className='w-full pt-[20vh] md:pt-[20vh]'>
        <div className='text-[#1199FA] text-[48px] md:text-[74px] leading-[57px] md:leading-[78px] font-[600] md:font-[500] text-center'>Earn</div>
        <div className='w-[85%] md:w-[50%] mt-[20px] mx-auto text-[18px] md:text-[20px] leading-[21px] md:leading-[24px] text-[#FFF] font-[400] md:font-[500] text-center'>
          By using this platform, you can be provided with a convenient work environment anytime, anywhere.
        </div>
        <div className='w-[45%] md:w-[30%] mt-[70px] md:mt-[110px] mx-auto border-b-[3px] md:border-b-[7px] border-[#1199FA] h-0 text-center' />
        <div className='border-[#1199FA] mt-[70px] md:mt-[80px] text-[48px] md:text-[74px] leading-[57px] md:leading-[78px] font-[600] md:font-[500] text-center'>
          Borrow
        </div>
        <div className='w-[85%] md:w-[55%] mt-[20px] mx-auto text-[18px] md:text-[20px] leading-[21px] md:leading-[24px] text-[#FFF] font-[400] md:font-[500] text-center'>
          <span>Contact me to get your dream website up and ready for the rest of the world to see!</span>
          <div className='mt-[15px]' />
        </div>
        <div className='flex w-full h-fit flex-row p-24'>
          <div className='mt-[20vh] md:mt-[150px] md:mx-auto md:w-[60%] text-center text-[48px] md:text-[64px] leading-[57px] md:leading-[76px] text-[#FFF] font-[500] md:drop-shadow-[0_0_2px_#FFFFFF]'>
            <span>Built by SoTru.</span>
            <br /> <span>AI Evolution is here.</span>
          </div>
          <div className='w-full  h-fit flex justify-center mt-[20vh] md:mt-[100px] mx-auto'>
            <div className='stack'>
              <div className='layer layer_1'>
                <img className='w-72 h-72 bg-cover bg-no-repeat bg-center items-center rounded-xl shadow-2xl' src={AIImage1} />
              </div>
              <div className='layer layer_2'><img className='w-72 h-72 bg-cover bg-no-repeat bg-center items-center rounded-xl shadow-2xl' src={AIImage2} /></div>
              <div className='layer layer_3'><img className='w-72 h-72 bg-cover bg-no-repeat bg-center items-center rounded-xl shadow-2xl' src={AIImage3} /></div>
            </div>
          </div>
        </div>
        <div
          className={`flex flex-col md:flex-row items-center ${
            !showDemo ? 'mt-[50vh]' : 'mt-[10vh]'
          } md:mx-auto md:bg-introdashboard-earn-back md:bg-contain md:bg-no-repeat bg-center md:w-[80%] md:h-[35vh]`}>
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
                  BORROW up to 50% of your deposit{' '}
                  <span>
                    <strong>instantly</strong>
                  </span>{' '}
                  and{' '}
                  <span>
                    <strong>permissionless.</strong>
                  </span>
                  No repayments.
                </div>
              )}
              <div className='md:mt-[10px] text-[#FFF] text-[14px]'>
                SoTru Banking revolutionary services come when you borrow. No applications, no forms, no risk management. It&apos;s your money, you
                are the bank.
              </div>
              <div className='md:mt-[6px] text-[#FFF] text-[14px]'>
                No repayments. The loan repays itself with the yields generated by your collateral.{' '}
              </div>
              {!isMobile && (
                <div
                  className='md:mt-[15px] md:text-[20px] md:leading-[24px] md:font-[500] text-[#FFF] border-[1px] border-[#FFF] md:w-[252px] md:h-[52px] flex items-center justify-center cursor-pointer'
                  onClick={() => navigate('/introborrow')}>
                  Calculate here
                </div>
              )}
            </div>
          </div>
        </div>
        {isMobile && (
          <div className='flex flex-row justify-between px-[15px] mt-[30px] mb-[80px] mx-auto text-[16px] leading-[19px] font-[500] text-[#FFF] border-[1px] border-[#FFF] w-[252px] h-[52px] items-center'>
            <div onClick={() => navigate('/introborrow')}>Calculate here</div>
            <div className='bg-introdashboard-arrow bg-cover bg-center w-[30px] md:w-[49px] h-[10px] md:h-[15px]' />
          </div>
        )}
        <div className='relative overflow-hidden'>
          <div className='mt-[120px] md:mt-[30vh] w-[80%] mx-auto md:w-full flex justify-center text-[36px] md:text-[72px] text-[#D9D9D9] md:text-[#1199FA] font-[600] capitalize md:leading-[120%]'>
            <div className='md:border-b-[5px] border-[#1199FA] text-center'>Select Your SoTru Card</div>
          </div>
          <div className='absolute left-[-33%] top-[20vh] w-[700px] h-[750px] bg-introdashboard-card1 bg-cover bg-center0'></div>
          <div className='absolute right-[-4%] top-0 w-[205px] h-[205px] bg-introdashboard-card2 bg-cover bg-center0'></div>
          <div className='absolute right-[-7%] top-[100vh] w-[358px] h-[238px] bg-introdashboard-card3 bg-cover bg-center0'></div>
          <div className='flex flex-col-reverse md:flex-col'>
            <div className='text-[#FFF] w-[90%] md:w-[75%] mt-[60px] mx-auto text-center text-[14px] md:text-[20px] md:leading-[24px] md:font-[500]'>
              Be one of the first cardholders of SoTru and make history. Make deposits and <span className='text-[#1199FA]'>receive 5% APY</span>,
              that&apos;s a better return than any bank across the globe. Borrow up to 50% of your collateral{' '}
              <span className='text-[#1199FA]'>instantly</span> and <span className='text-[#1199FA]'>permissionless.</span>
            </div>
            <div className='mt-[30px] md:mt-[100px] mx-auto w-[80vw] md:w-[60vw] h-[calc(80vw*537/912)] md:h-[calc(60vw*537/912)] bg-introdashboard-card bg-center bg-cover' />
          </div>
          {!isMobile && (
            <div className='md:mt-[75px] md:w-[full] flex justify-center'>
              <div className='mx-auto text-[#FFF] md:px-[9.5px] md:py-[14px] md:text-[20px] md:leading-[24px] md:font-[600] border-[2px] border-[#FFF] rounded-[4px]'>
                Swipe For Your Card
              </div>
            </div>
          )}
        </div>
        <div className='relative mt-[150px] md:mt-[50vh] mx-auto w-[90%] md:w-[70%] h-[40vh] md:h-[60vh] overflow-hidden'>
          <div className='text-[40px] md:text-[80px] leading-[48px] md:leading-[116px] font-[600] text-[#FFF]'>
            <span className='text-[#1199FA] md:text-[#FFF]'>B</span>e part of SoTru {isMobile && <br />}
            <span className='text-[#1199FA] md:text-[#FFF]'>B</span>anking {isMobile && <br />}{' '}
            <span className='text-[#1199FA] md:text-[#FFF]'>E</span>volution.
          </div>
          <div className='w-[45%] mt-[20px] text-[#FFF] text-[14px] md:text-[20px] leading-[17px] md:leading-[24px] md:font-[400]'>
            Get access to unmatched high yields on your money impossible for your legacy bank. A new banking system to serve YOU.
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
