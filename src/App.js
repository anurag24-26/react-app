// src/App.js
import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="main-section">
        <Header />
        <MainContent />
        <Footer />
      </div>
    </div>
  );
}

export default App;
