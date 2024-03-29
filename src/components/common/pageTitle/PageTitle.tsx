import React from 'react';
import { WithChildrenProps } from '../../../types/generalTypes';
import { Helmet } from 'react-helmet-async';

export const PageTitle: React.FC<WithChildrenProps> = ({ children }) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>SoTru | {children}</title>
      <meta name="description" content="SoTru application" />
    </Helmet>
  );
};
