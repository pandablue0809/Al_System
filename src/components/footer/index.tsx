import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import FooterContent from './FooterContent';

const Footer: React.FC = () => {
  const location = useLocation();
  const paths = ['/', '/auth/login', '/auth/sign-up', '/auth/forgot-password', '/dashboard/user', '/dashboard', '/dashboard/user/work'];

  return paths.includes(location.pathname) ? null : <FooterContent />;
};

export default Footer;
