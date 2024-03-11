import React from 'react';
import { WithChildrenProps } from '../../../types/generalTypes';
import { Helmet } from 'react-helmet-async';

export const PageTitle: React.FC<WithChildrenProps> = ({ children }) => {
  return (
    <Helmet>
      <title>{children} | SoTru</title>
    </Helmet>
  );
};
