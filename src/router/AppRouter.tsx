import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import SignUpPage from '../pages/SignUpPage';

import { withLoading } from '../hocs/withLoading.hoc';
import StartPage from '../pages/StartPage';

const Logout = React.lazy(() => import('./Logout'));
const Error404Page = React.lazy(() => import('../pages/Error404Page'));
const ServerErrorPage = React.lazy(() => import('../pages/ServerErrorPage'));
const UserDashboardPage = React.lazy(() => import('../pages/dashboard/UserDashboard'));
const UserDashboard = withLoading(UserDashboardPage);

export const START_PAGE = '/';

const LogoutFallback = withLoading(Logout);
const Error404 = withLoading(Error404Page);
const ServerError = withLoading(ServerErrorPage);

export const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={START_PAGE}>
          <Route index element={<StartPage />} />
        </Route>
        <Route path='/auth'>
          <Route path='login' element={<LoginPage />} />
          <Route path='sign-up' element={<SignUpPage />} />
        </Route>
        <Route path='/dashboard'>
          <Route path='user-dashboard' element={<UserDashboard />} />
        </Route>
        <Route path='/error'>
          <Route path='404' element={<Error404 />} />
          <Route path='server-error' element={<ServerError />} />
        </Route>
        <Route path='/logout' element={<LogoutFallback />} />
      </Routes>
    </Router>
  );
};
