import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { AppRouter } from './router/AppRouter';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import 'react-toastify/dist/ReactToastify.css';

const App: React.FC = () => {
  const darkTheme = createTheme({ palette: { mode: 'dark' } });
  return (
    <HelmetProvider>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <main className='w-full sotru-dark text-white bg-background'>
          <ToastContainer />
          <AppRouter />
        </main>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;
