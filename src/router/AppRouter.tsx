import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import { useAppSelector } from '../hooks/useReduxHooks';

import { withLoading } from '../hocs/withLoading.hoc';
import RequireAuth from './RequireAuth';
import MainLayout from '../components/layout/mainLayout/MainLayout';

//auth page
const LoginPage = React.lazy(() => import('../pages/LoginPage'));
const SignUpPage = React.lazy(() => import('../pages/SignUpPage'));
const ForgotPasswordPage = React.lazy(() => import('../pages/ForgotPasswordPage'));
const MailVerifyPage = React.lazy(() => import('../pages/MailVerifyPage'));
const CreateNewPasswordPage = React.lazy(() => import('../pages/CreateNewPasswordPage'));
const Logout = React.lazy(() => import('./Logout'));
//error page
const Error404Page = React.lazy(() => import('../pages/Error404Page'));
const ServerErrorPage = React.lazy(() => import('../pages/ServerErrorPage'));
//intro Page
const SplashPage = React.lazy(() => import('../pages/Splash'));
const IntroDashboardPage = React.lazy(() => import('../pages/IntroDashBoard'));
const AboutUsFirstPage = React.lazy(() => import('../pages/aboutUs/index'));
const AboutUsSecondPage = React.lazy(() => import('../pages/aboutUs/AboutUsPage'));
//authenticated page
const AIService = React.lazy(() => import('../pages/dashboard/user/AIService'));
// market page
const MarketPage = React.lazy(() => import('../pages/dashboard/marketDashboard'));
//auth
const LoginFallback = withLoading(LoginPage);
const SignUpFallback = withLoading(SignUpPage);
const ForgotPasswordFallback = withLoading(ForgotPasswordPage);
const MailVerifyFallback = withLoading(MailVerifyPage);
const CreateNewPasswordFallback = withLoading(CreateNewPasswordPage);
const LogoutFallback = withLoading(Logout);
//error
const Error404Fallback = withLoading(Error404Page);
const ServerErrorFallback = withLoading(ServerErrorPage);
//intro
const SplashFallback = withLoading(SplashPage);
const IntroDashboardFallback = withLoading(IntroDashboardPage);
const AboutUsFirstFallback = withLoading(AboutUsFirstPage);
const AboutUsSecondFallback = withLoading(AboutUsSecondPage);
//authenticated page
const AIServiceFallback = withLoading(AIService);
// market
const MarketFallback = withLoading(MarketPage);

const AppRouter: React.FC = () => {
  const { permission } = useAppSelector((state) => state.user);
  const location = useLocation();

  const protectLayout = (
    <RequireAuth>
      <MainLayout />
    </RequireAuth>
  );
  return (
    <Routes>
      <Route path='/' element={<SplashFallback />} />
      <Route path='/dashboard' element={protectLayout}>
        {permission === 'User' ? (
          <Route path='user'>
            <Route path='work' element={<AIServiceFallback />} />
          </Route>
        ) : (
          <Route path='admin'></Route>
        )}
      </Route>
      <Route path='/auth'>
        <Route path='login' element={<LoginFallback />} />
        <Route path='sign-up' element={<SignUpFallback />} />
        <Route path='forgot-password' element={<ForgotPasswordFallback />} />
        <Route path='reset-password' element={<CreateNewPasswordFallback />} />
      </Route>
      <Route path='/introdashboard' element={<IntroDashboardFallback />} />
      <Route path='/service/intro' element={<MarketFallback />} />
      <Route path='/about' element={<AboutUsFirstFallback />} />
      <Route path='/about/intro' element={<AboutUsSecondFallback />} />
      <Route path='/mail-verify' element={<MailVerifyFallback />} />
      <Route path='/logout' element={<LogoutFallback />} />
      <Route path='/*' element={<Error404Fallback />} />
    </Routes>
  );
};

export default AppRouter;
