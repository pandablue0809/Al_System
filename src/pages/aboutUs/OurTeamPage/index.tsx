import React from 'react';

import ImageCard from '../../../components/common/card/imageCard';

import TeamData from './TeamData';

const OurTeamPage: React.FC = () => {
  return (
    <div className='flex flex-row gap-2 flex-wrap mt-5'>
      {TeamData.map((item, index) => (
        <ImageCard key={index} {...item} />
      ))}
    </div>
  );
};

export default OurTeamPage;
