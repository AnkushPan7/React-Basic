import React from 'react';
import GoogleText from '../components/GoogleText';

/**
 * Home page component.
 *
 * @returns {JSX.Element} The Home page element.
 */
const Home = () => {
  return (
    <div className="home-page">
      <h1>Welcome to the Home Page</h1>
      <GoogleText />
    </div>
  );
};

export default Home;