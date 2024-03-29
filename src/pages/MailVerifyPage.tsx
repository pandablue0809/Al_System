import React from 'react';
import EmailVerifyForm from '../components/auth/mailVerifyForm/MailVerifyForm';
import { PageTitle } from '../components/common/pageTitle/PageTitle';

const MailVerifyPage: React.FC = () => {
  return (
    <>
      <PageTitle>{'mailverify'}</PageTitle>
      <EmailVerifyForm />
    </>
  );
};

export default MailVerifyPage;
