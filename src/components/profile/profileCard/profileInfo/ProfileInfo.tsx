import React, { useState } from 'react';
import { UserModel } from '../../../../domain/UserModel';
import { Avatar } from '@nextui-org/react';

export const ProfileInfo: React.FC = () => {
  const user = {
    avatar: 'https://lightence-assets.s3.amazonaws.com/avatars/avatar5.webp',
    firstName: 'Iwamoto',
    lastName: 'Kaito',
    userName: 'Legend',
  };

  const handleClick = () => {
    alert('Plz upload file');
  };

  return (
    <div className='text-center flex flex-col gap-10 items-center'>
      <button onClick={handleClick}>
        <Avatar
          showFallback
          name={user?.userName[0]}
          src={user?.avatar}
          className={'h-40 w-40 bg-secondary text-8xl hover:bg-secondary-500'}
          isBordered
        />
      </button>
      <div>
        <p className='text-2xl font-bold'>{`${user?.firstName} ${user?.lastName}`}</p>
        <p className='text-lg mb-2'>{user?.userName}</p>
      </div>
    </div>
  );
};
