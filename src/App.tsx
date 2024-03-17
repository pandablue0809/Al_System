import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { NextUIProvider } from '@nextui-org/react';
import { AppRouter } from './router/AppRouter';

const App: React.FC = () => {
  return (
    <HelmetProvider>
        <NextUIProvider>
          <main className='w-full sotru-dark text-foreground bg-background'>
            <AppRouter />
          </main>
        </NextUIProvider>
    </HelmetProvider>
  );
};

export default App;
