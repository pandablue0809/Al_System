import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './router/AppRouter';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import 'react-toastify/dist/ReactToastify.css';

import { useMode } from './theme';
import Header from './components/header';
import AIService from './pages/dashboard/user/AIService';

const App: React.FC = () => {
  const theme = useMode();
  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* <Router>
          <Header />
          <AppRouter />
        </Router> */}
        <AIService />
        <ToastContainer />
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;
