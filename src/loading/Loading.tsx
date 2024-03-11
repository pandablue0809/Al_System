import React from 'react';
import { GlobalSpinner } from '../components/common/globalSpinner/GlobalSpinner';

type LoadingProps = {
  size?: string;
  color?: 'primary' | 'secondary' | 'success' | 'warning';
};

export const Loading: React.FC<LoadingProps> = ({ color = 'secondary', size }) => {
  return (
    <div className='h-full w-full flex items-center justify-center'>
      <GlobalSpinner className={`w-${size} h-${size}`} color={color} />
    </div>
  );
};
