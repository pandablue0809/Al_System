import React from 'react';

import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../hooks/useReduxHooks';
import { WithChildrenProps } from '../types/generalTypes';

const RequireAuth: React.FC<WithChildrenProps> = ({ children }) => {
  const { token } = useAppSelector((state) => state.auth);
  return token ? <>{children}</> : <Navigate to='/auth/login' replace />;
};

export default RequireAuth;
