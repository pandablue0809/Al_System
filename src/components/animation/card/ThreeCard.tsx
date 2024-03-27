import React from 'react';

type ThreeCardProps = {
  avatar: string;
  name: string;
  role: string;
};

const ThreeCard: React.FC<Partial<ThreeCardProps>> = ({ avatar, role = 'Developer', name }) => {
  return (
    <div className='transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-100 duration-300'>
      <div className='w-dyn-item' role='listitem'>
        <div className='team--card--wrapper'>
          <div className='grad--outside'>
            <div className='card-main-wrap'>
              <div className='card-dark-bg'>
                <img src={avatar} loading='lazy' alt='team-list' className='card-dark-bg' />
                <h4 className='mt-[10px] mb-[10px] text-[30px] font-semibold leading-10'>{name}</h4>
                <div className='text-[#fe8a31] text-[18px] leading-[24px]'>{role}</div>
                <img
                  src={'https://assets-global.website-files.com/63b59a34612343e8703db9d4/646f8f5c41204b16e2a024ac_Line%2073.svg'}
                  loading='lazy'
                  alt='team-member-rol'
                  style={{ width: '100', margin: '20px auto' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeCard;
