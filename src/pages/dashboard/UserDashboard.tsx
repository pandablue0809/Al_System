import React from 'react';
// import { Routes, Route } from "react-router-dom";
import { CssBaseline } from '@mui/material';

import UserSidebar from '../../components/layout/userSidebar/UserSidebar';
import Header from '../../components/header/Header';
import WorkRoom from './userDashboardComponent/WorkRoom';

const UserDashboard: React.FC = () => {

  return (
    <>
      <CssBaseline />
      <div className='w-full h-full flex relative'>
        <UserSidebar />
        <main className='w-full h-screen box-border flex flex-col'>
          <Header />
          <WorkRoom />
          {/* <Routes>
            <Route path='/user-dashboard/work' element={<WorkRoom />} />
            <Route path='/' element={<Dashboard />} />
            <Route path='/team' element={<Team />} />
            <Route path='/contacts' element={<Contacts />} />
            <Route path='/invoices' element={<Invoices />} />
            <Route path='/bar' element={<Bar />} />
            <Route path='/pie' element={<Pie />} />
            <Route path='/line' element={<Line />} />
            <Route path='/faq' element={<FAQ />} />
            <Route path='/calendar' element={<Calendar />} />
            <Route path='/geography' element={<Geography />} />
          </Routes> */}
        </main>
      </div>
    </>
  );
};

export default UserDashboard;
