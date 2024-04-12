import React from 'react';
import AvatarEditorComponent from '../../../common/avatar/AvatarEditorComponent';

export const ProfileInfo: React.FC = () => {
  const user = {
    avatar: 'https://lightence-assets.s3.amazonaws.com/avatars/avatar5.webp',
    firstName: 'admin',
    lastName: '',
    userName: 'devlegend',
  };

  return (
    <div className='text-center flex flex-col gap-10'>
      <div className='flex justify-center'>
        <AvatarEditorComponent src={user?.avatar} />
      </div>
      <div>
        <p className='text-2xl font-bold'>{`${user?.firstName} ${user?.lastName}`}</p>
        <p className='text-md mb-2 text-gray-600 font-semibold'>{user?.userName}</p>
      </div>
    </div>
  );
};
