import React from 'react';
import { GlobalSpinner } from '../components/common/globalSpinner/GlobalSpinner';
import Spinner from '../assets/images/Spinner.gif';

type LoadingProps = {
  size?: string;
};

export const Loading: React.FC<LoadingProps> = ({ size }) => {
  return (
    <div className='h-full w-full flex items-center justify-center'>
      <img className={`w-${size} h-${size} bg-no-repeat overflow-clip bg-cover`} src={Spinner} alt='spinner' />
    </div>
  );
};
