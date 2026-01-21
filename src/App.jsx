import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="app-container">
      <div className="content">
        <Header />
        <main className="main-content">
          <p>Main content area.</p>
          <hr />
          <p>More main content area.</p>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;