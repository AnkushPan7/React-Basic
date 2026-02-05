import React from 'react';
import Sidebar from '../components/Sidebar';
import './Home.css';

const Home = () => {
  return (
    <div className="container">
      <Sidebar />
      <div className="main-content">
        <h1>Welcome to the Home Page</h1>
        <p>This is the main content area.</p>
      </div>
    </div>
  );
};

export default Home;