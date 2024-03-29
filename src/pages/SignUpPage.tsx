import React from 'react';
import SignUpForm from '../components/auth/signUpForm/SignUpForm';
import { PageTitle } from '../components/common/pageTitle/PageTitle';

const SignUpPage: React.FC = () => {
  return (
    <>
      <PageTitle>{'SignUp'}</PageTitle>
      <SignUpForm />
    </>
  );
};

export default SignUpPage;
