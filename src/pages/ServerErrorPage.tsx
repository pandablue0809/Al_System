import React from 'react';
import ServerError from '../components/error/ServerError';
import { PageTitle } from '../components/common/pageTitle/PageTitle';

const ServerErrorPage: React.FC = () => {
  return (
    <>
      <PageTitle>{'Server Error'}</PageTitle>
      <ServerError />
    </>
  );
};

export default ServerErrorPage;
