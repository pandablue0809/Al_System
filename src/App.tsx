import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './router/AppRouter';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/header';

const App: React.FC = () => {
  const darkTheme = createTheme({ palette: { mode: 'dark' } });
  return (
    <HelmetProvider>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Router>
          <Header />
          <AppRouter />
        </Router>
        <ToastContainer />
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;
