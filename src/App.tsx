import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { ConfigProvider } from 'antd';
import { NextUIProvider } from '@nextui-org/react';
import enUS from 'antd/lib/locale/en_US';
import { AppRouter } from './router/AppRouter';

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <ConfigProvider locale={enUS}>
        <NextUIProvider>
          <main className='w-full sotru-dark text-foreground bg-background'>
            <AppRouter />
          </main>
        </NextUIProvider>
      </ConfigProvider>
    </HelmetProvider>
  );
};

export default App;
