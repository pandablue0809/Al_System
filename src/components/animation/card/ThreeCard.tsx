import React from 'react';
import Place from '@mui/icons-material/PlaceOutlined';
import Position from '@mui/icons-material/SensorOccupiedOutlined';

type ThreeCardProps = {
  avatar: string;
  position: string;
  name: string;
  location: string;
  role: string;
};

const ThreeCard: React.FC<Partial<ThreeCardProps>> = ({
  avatar,
  role = 'Developer',
  position = 'full stack deveoper',
  name = 'Alex',
  location = 'San Francisco, USA',
}) => {
  return (
    <div className=''>
      <div className='w-[280px] h-[350px] flex flex-col bg-white rounded-md p-3 shadow-xl transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-100 duration-300'>
        <div className='h-[220px] w-full flex'>
          <img
            className='w-full h-full rounded-t-md bg-cover bg-center overflow-clip'
            src={avatar ?? 'https://www.outdefine.com/_next/image?url=%2Fimages%2Flanding-page%2FLuizN.webp&w=1920&q=100'}
          />
        </div>
        <div className='flex flex-col'>
          <div className='text-black font-semibold'>{role ?? ''}</div>

          <div className='text-black'>{name ?? ''}</div>
          <div className='text-black flex'>
            <Place />
            <span className='ml-1'>{location ?? ''}</span>
          </div>
          <div className='text-black mt-1'>
            <Position />
            <span className='ml-1'>{position ?? ''}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeCard;
