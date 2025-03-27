import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import MiddleSection from '../components/MiddleSection';

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <MiddleSection />
      </div>
    </div>
  );
};

export default Dashboard;
