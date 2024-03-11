import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import SignUpPage from '../pages/SignUpPage';

import { withLoading } from '../hocs/withLoading.hoc';
import StartPage from '../pages/StartPage';

const Logout = React.lazy(() => import('./Logout'));

export const START_PAGE = '/';

const LogoutFallback = withLoading(Logout);

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
        <Route path='/logout' element={<LogoutFallback />} />
      </Routes>
    </Router>
  );
};
