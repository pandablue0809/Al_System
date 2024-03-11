import React from 'react';
import SignUpForm from '../components/auth/signUpForm/SignUpForm';
import { PageTitle } from '../components/common/pageTitle/PageTitle';

const SignUpPage: React.FC = () => {
  return (
    <>
      <PageTitle>{'common.signUp'}</PageTitle>
      <SignUpForm />
    </>
  );
};

export default SignUpPage;
