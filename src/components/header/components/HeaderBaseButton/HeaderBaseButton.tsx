import React from 'react';

type HeaderBaseButtonBasicData = React.PropsWithChildren<React.ButtonHTMLAttributes<HTMLButtonElement>>;

type HeaderBaseButtonData = HeaderBaseButtonBasicData;

export const HeaderBaseButton: React.FC<Partial<HeaderBaseButtonData>> = ({ children, onClick }) => {
  return (
    <button className='flex w-max h-full' onClick={onClick}>
      {children && (
        <span className='flex text-base sm:text-xl text-white hover:text-success bg-transparent select-none font-sans tracking-wide font-semibold transition ease-in-out duration-300'>
          {children}
        </span>
      )}
    </button>
  );
};
