import React, { Suspense, useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import Layout from './components/Layout';
import Loader from './components/Loader';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Layout>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;