import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { ConfigProvider } from 'antd';
import { NextUIProvider } from '@nextui-org/react';
import enUS from 'antd/lib/locale/en_US';
import UserDashboard from './pages/dashboard/UserDashboard';

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <ConfigProvider locale={enUS}>
        <NextUIProvider>
          <main className='w-full sotru-dark text-foreground bg-background'>
            <UserDashboard />
          </main>
        </NextUIProvider>
      </ConfigProvider>
    </HelmetProvider>
  );
};

export default App;
