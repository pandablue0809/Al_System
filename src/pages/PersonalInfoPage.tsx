import React from 'react';
import ProfileLayout from '../components/profile/ProfileLayout';
import { PageTitle } from '../components/common/pageTitle/PageTitle';

const PersonalInfoPage: React.FC = () => {
  return (
    <>
    <PageTitle>{'Info Page'}</PageTitle>
      <ProfileLayout />
    </>
  );
};

export default PersonalInfoPage;
