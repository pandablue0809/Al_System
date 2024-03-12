import React from 'react';

type GlobalSpinnerProps = {
  className?: string;
  varient?: 'EdgeX' | 'EdgeY';
  color?: 'primary' | 'secondary' | 'success' | 'warning';
};

export const GlobalSpinner: React.FC<GlobalSpinnerProps> = ({ varient = 'EdgeX', color = 'secondary', className }) => {
  return (
    <>
      {varient === 'EdgeX' ? (
        <div
          className={`w-12 h-12 rounded-full animate-spin border-x-2 border-solid  ${color === 'primary' ? 'border-blue-500' : color === 'secondary' ? 'border-purple-500' : color === 'success' ? 'border-green-500' : 'border-yellow-500'} border-t-transparent ${className ?? ''}`}
        />
      ) : (
        <div
          className={`w-12 h-12 rounded-full animate-spin border-y-2 border-solid ${color === 'primary' ? 'border-blue-500' : color === 'secondary' ? 'border-purple-500' : color === 'success' ? 'border-green-500' : 'border-yellow-500'} border-t-transparent ${className ?? ''}`}
        />
      )}
    </>
  );
};
