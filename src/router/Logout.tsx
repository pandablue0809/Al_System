import React, { useEffect } from 'react';
import { useAppDispatch } from '../hooks/useReduxHooks';
import { Navigate } from 'react-router-dom';
import { doLogout } from '../store/slices/authSlice';

const Logout: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doLogout());
  }, [dispatch]);

  return <Navigate to='/introdashboard' replace />;
};

export default Logout;
