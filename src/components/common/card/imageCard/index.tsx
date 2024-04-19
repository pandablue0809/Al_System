import React from 'react';

export type ImageCardProps = {
  bgImg?: string;
  banner?: string;
  character?: string;
};

const ImageCard: React.FC<ImageCardProps> = ({ bgImg, banner, character }) => {
  return (
    <div className='pt-40'>
      <a href='#' target='_blank'>
        <div className='card rounded-lg'>
          <div className='wrapper'>
            <img src={bgImg} className='cover-image rounded-md shadow-md' />
          </div>
          <img src={banner} className='title' />
          <img src={character} className='character' />
        </div>
      </a>
    </div>
  );
};

export default ImageCard;
