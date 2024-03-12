import React, { useEffect } from 'react';
import { useAppDispatch } from '../hooks/useReduxHooks';
import { Navigate } from 'react-router-dom';

const Logout: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // dispatch(doLogout());
  }, [dispatch]);

  return <Navigate to='/auth/login' replace />;
};

export default Logout;
