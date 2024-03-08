import React from 'react';
import { Button } from '@nextui-org/react';
import StartIcons from '../../../../assets/images/images/get-started.svg'

type HeaderAuthButtonData = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const HeaderAuthButton: React.FC<Partial<HeaderAuthButtonData>> = ({ onClick }) => {
  return (
    <Button
      radius='full'
      variant='flat'
      color='success'
      className='mx-auto flex max-w-xl items-center justify-center gap-2 rounded-full px-4 py-2 text-center text-sm text-light md:px-4 md:py-2 md:text-xl'
      endContent={<img src={StartIcons} alt='start-icon' className='mt-2 h-4 w-4 md:h-6 md:w-6' />}
      onClick={onClick}>
      Get Started
    </Button>
  );
};
