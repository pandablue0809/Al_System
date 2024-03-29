import React from 'react';
import ForgotPassword from '../components/auth/forgotPassword/ForgotPassword';
import { PageTitle } from '../components/common/pageTitle/PageTitle';

const ForgotPasswordPage: React.FC = () => {
  return (
    <>
      <PageTitle>{'forgot password'}</PageTitle>
      <ForgotPassword />
    </>
  );
};

export default ForgotPasswordPage;
