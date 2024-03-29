import React from 'react';

export type EarthProps = {
  className?: string;
}

const Earth: React.FC<EarthProps> = ({ className }) => {
  return (
    <div className={`bg-introearn-earth rounded-full w-[486px] h-[486px] bg-earth bg-auto ${className}`} />
  );
};

export default Earth;