import React, { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './router/AppRouter';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import 'react-toastify/dist/ReactToastify.css';

import { theme } from './theme';
import Header from './components/header';
import Footer from './components/footer';
import AIServiceLayout from './components/layout/aiserviceLayout/AIServiceLayout';

const App: React.FC = () => {
  useEffect(() => {
    if ('caches' in window) {
      caches.keys().then((names) => {
        names.forEach((name) => {
          caches.delete(name);
        });
      });
    }
  }, []);

  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          {/* <Header />
          <AppRouter />
          <Footer /> */}
          <AIServiceLayout />
        </Router>
        <ToastContainer />
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;
