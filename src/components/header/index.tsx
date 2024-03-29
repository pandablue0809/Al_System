import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../hooks/useReduxHooks';
import { IntroHeader } from './IntroHeader';
import { MainHeader } from './MainHeader';
import { readUser } from '../../services/localStorage.service';
import { setUser } from '../../store/slices/userSlice';

const Header: React.FC = () => {
  const location = useLocation();
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const username = readUser()?.username;
    if (username) {
      loadUser(username);
    }
  }, []);

  const loadUser = async (user: string) => {
    await dispatch(setUser(user));
  };

  if (location.pathname === '/' || location.pathname === '/auth/login' || location.pathname === '/auth/sign-up') return null;
  if (user) {
    return <MainHeader />;
  } else {
    return <IntroHeader />;
  }
};

export default Header;
