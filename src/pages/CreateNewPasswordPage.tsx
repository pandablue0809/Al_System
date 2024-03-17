import React from 'react';
import CreateNewPassword from '../components/auth/createNewPassword/CreateNewPassword';
import { PageTitle } from '../components/common/pageTitle/PageTitle';

const CreateNewPasswordPage: React.FC = () => {
  return (
    <>
      <PageTitle>{'create new password'}</PageTitle>
      <CreateNewPassword />
    </>
  );
};

export default CreateNewPasswordPage;
