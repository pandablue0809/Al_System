import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { NextUIProvider } from '@nextui-org/react';
import { AppRouter } from './router/AppRouter';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <NextUIProvider>
        <main className='w-full sotru-dark text-foreground bg-background'>
          <ToastContainer />
          <AppRouter />
        </main>
      </NextUIProvider>
    </HelmetProvider>
  );
};

export default App;
