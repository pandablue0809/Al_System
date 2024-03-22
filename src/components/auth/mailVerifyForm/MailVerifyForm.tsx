import React, { useEffect, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { GlobalSpinner } from '../../common/globalSpinner/GlobalSpinner';

import { useAppSelector, useAppDispatch } from '../../../hooks/useReduxHooks';
import { doEmailVerify } from '../../../store/slices/authSlice';

import { IoMailOpenOutline } from 'react-icons/io5';

const EmailVerifyForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // Get a specific query parameter
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const token = searchParams.get('token');

  const { verifying } = useAppSelector((state) => state.auth);
  const { isVerified } = useAppSelector((state) => state.auth);

  const loadData = useCallback(() => {
    if (!token) {
      return;
    }
    dispatch(doEmailVerify(token as string));
  }, [token, dispatch]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  useEffect(() => {
    if (isVerified) {
      setTimeout(() => {
        navigate('/auth/login');
      }, 3000);
    }
  }, [isVerified, navigate]);

  return (
    <div className='w-screen h-screen flex justify-center align-middle items-center text-center'>
      {verifying ? (
        <div className='container flex flex-col absolute items-center justify-center text-center' style={{ translate: 'translate(-50%, -50%)' }}>
          <GlobalSpinner />
          <span className='w-1/2 text-white text-2xl'>Verification is in progress...</span>
        </div>
      ) : (
        <div className='container flex flex-col absolute items-center justify-center text-center' style={{ translate: 'translate(-50%, -50%)' }}>
          <IoMailOpenOutline className='w-24 h-24 text-white' />
          <span className='w-1/2 text-white text-2xl'>
            Your email has been successfully verified and that you can now access the full functionality of the SoTru platform.
          </span>
        </div>
      )}
    </div>
  );
};

export default EmailVerifyForm;
