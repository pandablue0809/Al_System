import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import UserSidebar from '../components/layout/userSidebar/UserSidebar';

import { useAppSelector, useAppDispatch } from '../hooks/useReduxHooks';
import { setUser } from '../store/slices/userSlice';
import { readUser } from '../services/localStorage.service';

import LoginPage from '../pages/LoginPage';
import SignUpPage from '../pages/SignUpPage';

import { withLoading } from '../hocs/withLoading.hoc';
import Header from '../components/header/Header';

const Start = React.lazy(() => import('../pages/StartPage'));
const Logout = React.lazy(() => import('./Logout'));
const Error404Page = React.lazy(() => import('../pages/Error404Page'));
const ServerErrorPage = React.lazy(() => import('../pages/ServerErrorPage'));
const MailVerifyPage = React.lazy(() => import('../pages/MailVerifyPage'));
const ForgotPassword = React.lazy(() => import('../pages/ForgotPasswordPage'));

const ChatRoom = React.lazy(() => import('../pages/dashboard/userDashboardComponent/ChatRoom'));
const WorkRoom = React.lazy(() => import('../pages/dashboard/userDashboardComponent/WorkRoom'));
const Setting = React.lazy(() => import('../pages/PersonalInfoPage'));

export const START_PAGE = '/';

const StartPage = withLoading(Start);
const LogoutFallback = withLoading(Logout);
const Error404 = withLoading(Error404Page);
const ServerError = withLoading(ServerErrorPage);
const MailVerify = withLoading(MailVerifyPage);
const ForgotPasswordPage = withLoading(ForgotPassword);
const ChatService = withLoading(ChatRoom);
const WorkService = withLoading(WorkRoom);
const PersonalInfo = withLoading(Setting);

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
        <div className='w-screen h-screen flex'>
          <CssBaseline />
          <div className='w-full h-full flex relative'>
            <UserSidebar />
            <main className='w-full h-full box-border flex px-10'>
              <div className='w-full h-screen flex flex-col box-border relative overflow-y-auto justify-center'>
                <Header />
                <Routes>
                  <Route path='/auth'>
                    <Route path='login' element={<LoginPage />} />
                  </Route>
                  <Route path='/dashboard'>
                    <Route path='user/chat' element={<ChatService />} />
                    <Route path='user/work' element={<WorkService />} />
                    <Route path='user/setting' element={<PersonalInfo />} />
                  </Route>
                  <Route path='/error'>
                    <Route path='server' element={<ServerError />} />
                  </Route>
                  <Route path='/logout' element={<LogoutFallback />} />
                  <Route path='*' element={<Error404 />} />
                </Routes>
              </div>
            </main>
          </div>
        </div>
      ) : (
        <Routes>
          <Route path={START_PAGE}>
            <Route index element={<StartPage />} />
          </Route>
          <Route path='/auth'>
            <Route path='login' element={<LoginPage />} />
            <Route path='sign-up' element={<SignUpPage />} />
            <Route path='forgot-password' element={<ForgotPasswordPage />} />
          </Route>
          <Route path='/mail-verify' element={<MailVerify />} />
          <Route path='/logout' element={<LogoutFallback />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      )}
    </Router>
  );
};
