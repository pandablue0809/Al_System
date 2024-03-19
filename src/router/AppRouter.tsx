import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { useAppSelector, useAppDispatch } from '../hooks/useReduxHooks';
import { setUser } from '../store/slices/userSlice';

import LoginPage from '../pages/LoginPage';
import SignUpPage from '../pages/SignUpPage';

import { withLoading } from '../hocs/withLoading.hoc';
import StartPage from '../pages/StartPage';
import { readUser } from '../services/localStorage.service';

const Logout = React.lazy(() => import('./Logout'));
const Error404Page = React.lazy(() => import('../pages/Error404Page'));
const ServerErrorPage = React.lazy(() => import('../pages/ServerErrorPage'));
const UserDashboardPage = React.lazy(() => import('../pages/dashboard/UserDashboard'));
const MailVerifyPage = React.lazy(() => import('../pages/MailVerifyPage'));

export const START_PAGE = '/';

const UserDashboard = withLoading(UserDashboardPage);
const LogoutFallback = withLoading(Logout);
const Error404 = withLoading(Error404Page);
const ServerError = withLoading(ServerErrorPage);
const MailVerify = withLoading(MailVerifyPage);

export const AppRouter: React.FC = () => {
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

  return (
    <Router>
      {user ? (
        <Routes>
          <Route path={START_PAGE}>
            <Route index element={<StartPage />} />
          </Route>
          <Route path='/auth'>
            <Route path='login' element={<LoginPage />} />
            <Route path='sign-up' element={<SignUpPage />} />
          </Route>
          <Route path='/mail-verify' element={<MailVerify />} />
          <Route path='/dashboard'>
            <Route path='user-dashboard' element={<UserDashboard />} />
          </Route>
          <Route path='/error'>
            <Route path='404' element={<Error404 />} />
            <Route path='server-error' element={<ServerError />} />
          </Route>
          <Route path='/logout' element={<LogoutFallback />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      ) : (
        <Routes>
          <Route path={START_PAGE}>
            <Route index element={<StartPage />} />
          </Route>
          <Route path='/auth'>
            <Route path='login' element={<LoginPage />} />
            <Route path='sign-up' element={<SignUpPage />} />
          </Route>
          <Route path='/logout' element={<LogoutFallback />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      )}
    </Router>
  );
};
