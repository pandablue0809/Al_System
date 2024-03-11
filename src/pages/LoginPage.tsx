import React from 'react';
import LoginForm from '../components/auth/logInForm/LogInForm';
import { PageTitle } from '../components/common/pageTitle/PageTitle';

const LoginPage: React.FC = () => {
  return (
    <>
      <PageTitle>{'common.login'}</PageTitle>
      <LoginForm />
    </>
  );
};

export default LoginPage;