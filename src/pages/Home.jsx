import React from 'react';
import Sidebar from '../components/Sidebar';
import '../styles/sidebar.css';

const Home = () => {
  const navItems = [
    { label: 'Home', href: '#home', active: true },
    { label: 'Projects', href: '#projects' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <div className="home-layout" style={{ display: 'flex', height: '100vh' }}>
      <Sidebar items={navItems} />
      <main 
        id="home" 
        className="content" 
        style={{ 
          marginLeft: 260, 
          padding: 24, 
          width: '100%', 
          overflowY: 'auto', 
          height: '100vh'
        }}
      >
        <section id="home">
          <h1>Welcome to React-Basic</h1>
          <p>This page includes a reusable sidebar.</p>
        </section>
        <section id="projects" style={{ marginTop: 60 }}>
          <h2>Projects</h2>
          <p>List of projects will appear here.</p>
        </section>
        <section id="about" style={{ marginTop: 60 }}>
          <h2>About</h2>
          <p>About this project and its goals.</p>
        </section>
        <section id="contact" style={{ marginTop: 60 }}>
          <h2>Contact</h2>
          <p>Get in touch with us.</p>
        </section>
      </main>
    </div>
  );
};

export default Home;